import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import type { Tool } from '@/types';

const CACHE_DURATION = 15 * 60 * 1000;
let cachedData: Tool[] | null = null;
let cacheTimestamp: number = 0;

async function fetchFromGoogleSheets(): Promise<Tool[]> {
  try {
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const range = process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A2:L'; // Starting from row 2 (skip headers)

    if (!apiKey || !spreadsheetId) {
      throw new Error('Missing Google Sheets configuration');
    }

    const sheets = google.sheets({ version: 'v4', auth: apiKey });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return [];
    }

    // Transform rows into Tool objects
    const tools: Tool[] = rows.map((row: any[]) => ({
      id: row[0] || '',
      name: row[1] || '',
      slug: row[2] || '',
      tagline: row[3] || '',
      description: row[4] || '',
      websiteUrl: row[5] || '',
      categories: row[6] ? row[6].split(',').map((c: string) => c.trim()) : [],
      tags: row[7] ? row[7].split(',').map((t: string) => t.trim()) : [],
      pricing: (row[8] || 'free') as 'free' | 'freemium' | 'paid' | 'enterprise',
      platforms: row[9] ? row[9].split(',').map((p: string) => p.trim()) : [],
      rating: parseFloat(row[10]) || 0,
      featured: row[11]?.toLowerCase() === 'true' || row[11] === '1',
    }));

    return tools;
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const now = Date.now();

    // Check if cache is still valid
    if (cachedData && (now - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json({
        data: cachedData,
        cached: true,
        cacheAge: Math.floor((now - cacheTimestamp) / 1000), // in seconds
      });
    }

    // Fetch fresh data
    const tools = await fetchFromGoogleSheets();

    // Update cache
    cachedData = tools;
    cacheTimestamp = now;

    return NextResponse.json({
      data: tools,
      cached: false,
      cacheAge: 0,
    });
  } catch (error) {
    console.error('API Error:', error);

    if (cachedData) {
      return NextResponse.json({
        data: cachedData,
        cached: true,
        cacheAge: Math.floor((Date.now() - cacheTimestamp) / 1000),
        error: 'Failed to fetch fresh data, serving stale cache',
      });
    }

    return NextResponse.json(
      { error: 'Failed to fetch tools', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
