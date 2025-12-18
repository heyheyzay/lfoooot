const https = require('https');
const fs = require('fs');

const SPREADSHEET_ID = '1aFl5gHiVG-Ahrsil9TDY1GkGf1r3RmtjF3uvrW6ZOrc';
const API_KEY = 'AIzaSyA_-BCrRf91OvMb5vunSsMFjPiKbi_6cVE';

// Read the JSON data
const tools = JSON.parse(fs.readFileSync('./football-tools-data.json', 'utf8'));

// Convert tools to rows format for Google Sheets
const rows = tools.map(tool => [
  tool.id,
  tool.name,
  tool.slug,
  tool.tagline,
  tool.description,
  tool.websiteUrl,
  tool.categories,
  tool.tags,
  tool.pricing,
  tool.platforms,
  tool.rating,
  tool.featured
]);

// Prepare the request body
const requestBody = JSON.stringify({
  values: rows
});

// Make the API request to append data
const options = {
  hostname: 'sheets.googleapis.com',
  path: `/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A2:L:append?valueInputOption=RAW&key=${API_KEY}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': requestBody.length
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
    const response = JSON.parse(data);
    if (response.updates) {
      console.log(`\nSuccessfully added ${response.updates.updatedRows} rows to the spreadsheet!`);
      console.log(`Updated range: ${response.updates.updatedRange}`);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(requestBody);
req.end();
