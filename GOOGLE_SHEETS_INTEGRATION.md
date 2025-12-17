# Google Sheets Integration Setup Guide

This guide will help you connect your Google Sheets spreadsheet to dynamically display tools on your Footfolio website.

## Features
- ✅ Real-time data from Google Sheets
- ✅ 15-minute server-side caching (no rate limit issues)
- ✅ Automatic fallback to cached data if API fails
- ✅ Free to use

---

## Step 1: Prepare Your Google Spreadsheet

### 1.1 Create Your Spreadsheets (Recommended: 2 Sheets)

**Best Practice:** Keep two separate spreadsheets:

1. **Public Sheet** - "lfoooot published tools"
   - This will be public and connected to your website
   - Only add tools you want live on the site
   - Safe to share, as all data will be visible on your website anyway

2. **Private Sheet** - "lfoooot working draft"
   - Keep this private for your internal use
   - Add notes, drafts, ideas, unpublished tools
   - When ready, copy rows to your Public Sheet

### 1.2 Create Your Public Spreadsheet

Create a Google Sheet with the following columns (in this exact order):

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| id | name | slug | tagline | description | websiteUrl | categories | tags | pricing | platforms | rating | featured |

### 1.2 Example Data

**Row 1 (Headers):**
```
id | name | slug | tagline | description | websiteUrl | categories | tags | pricing | platforms | rating | featured
```

**Row 2 (Example tool):**
```
1 | Sofascore | sofascore | Live scores and stats | Comprehensive live scores... | https://sofascore.com | live-scores,analytics | scores,stats,real-time | freemium | web,ios,android | 4.8 | true
```

### 1.3 Important Notes:

- **id**: Unique identifier (1, 2, 3, etc.)
- **slug**: URL-friendly version of name (lowercase, no spaces: `sofascore`, `espn-fc`)
- **categories**: Comma-separated (e.g., `live-scores,analytics`)
- **tags**: Comma-separated (e.g., `scores,stats,real-time`)
- **pricing**: Must be one of: `free`, `freemium`, `paid`, `enterprise`
- **platforms**: Comma-separated (e.g., `web,ios,android,api`)
- **rating**: Number from 0-5 (e.g., `4.8`)
- **featured**: `true` or `false` (or `1` or `0`)

---

## Step 2: Get Google Sheets API Key

### 2.1 Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name it "Footfolio" and click "Create"

### 2.2 Enable Google Sheets API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and click "Enable"

### 2.3 Create API Key

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. **Copy the API key** (you'll need this later)
4. Click "Restrict Key" (recommended):
   - Under "API restrictions" → "Restrict key"
   - Select "Google Sheets API"
   - Click "Save"

---

## Step 3: Make Your PUBLIC Spreadsheet Public

**Important:** Only make your "Published Tools" spreadsheet public, NOT your working/draft sheet!

1. Open your **PUBLIC** Google Sheet (the one you want connected to your website)
2. Click "Share" button (top right)
3. Click "Change to anyone with the link"
4. Make sure it's set to **"Viewer"** permission (NOT "Editor"!)
5. Click "Done"

**Security Note:**
- ✅ Anyone can VIEW this spreadsheet if they have the link
- ❌ Nobody can EDIT it (viewer permission only)
- ✅ Keep your working/draft sheet PRIVATE (don't share it)
- ✅ Only add published tools to this public sheet

---

## Step 4: Get Your Spreadsheet ID

From your Google Sheets URL:
```
https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
                                        ^^^^^^^^^^^^^^^^^^^
                                        Copy this part!
```

Example:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
```
The ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

---

## Step 5: Configure Environment Variables

### 5.1 Create Local `.env.local` File

Create a file named `.env.local` in your project root:

```env
GOOGLE_SHEETS_API_KEY=YOUR_API_KEY_HERE
GOOGLE_SHEETS_SPREADSHEET_ID=YOUR_SPREADSHEET_ID_HERE
GOOGLE_SHEETS_RANGE=Sheet1!A2:L
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Replace:
- `YOUR_API_KEY_HERE` with your Google Sheets API key
- `YOUR_SPREADSHEET_ID_HERE` with your spreadsheet ID

### 5.2 Configure Netlify Environment Variables

1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site configuration" → "Environment variables"
4. Add these variables:

```
GOOGLE_SHEETS_API_KEY = your_api_key_here
GOOGLE_SHEETS_SPREADSHEET_ID = your_spreadsheet_id_here
GOOGLE_SHEETS_RANGE = Sheet1!A2:L
NEXT_PUBLIC_BASE_URL = https://your-site.netlify.app
```

---

## Step 6: Update Your Code to Use Google Sheets

The integration is already set up! The API route at `/api/tools` will:
- Fetch data from Google Sheets
- Cache it for 15 minutes
- Serve cached data to avoid rate limits

### How the Caching Works:

1. **First request:** Fetches from Google Sheets, caches for 15 min
2. **Next 15 minutes:** All requests use cached data (instant!)
3. **After 15 minutes:** Next request fetches fresh data, updates cache
4. **If API fails:** Serves stale cache as fallback

---

## Step 7: Test Locally

1. **Start your development server:**
   ```bash
   npx pnpm run dev
   ```

2. **Test the API endpoint:**
   Open: `http://localhost:3000/api/tools`

   You should see JSON response:
   ```json
   {
     "data": [ ... your tools ... ],
     "cached": false,
     "cacheAge": 0
   }
   ```

3. **Refresh the page:**
   - Second request should show `"cached": true`
   - `cacheAge` shows how old the cache is (in seconds)

---

## Step 8: Deploy to Netlify

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add Google Sheets integration"
   git push origin main
   ```

2. **Netlify will automatically deploy**

3. **Verify it works:**
   - Visit: `https://your-site.netlify.app/api/tools`
   - Should see your tools data

---

## Updating Tools

### Workflow for Publishing New Tools:

1. **Work in your PRIVATE sheet:**
   - Add draft tools
   - Write descriptions
   - Add internal notes
   - Test URLs

2. **When ready to publish:**
   - Copy the row from your private sheet
   - Paste it into your PUBLIC sheet
   - Make sure all required fields are filled

3. **See changes on your site:**
   - Wait up to 15 minutes for cache to refresh
   - Or manually clear cache by restarting the Netlify function
   - Your site will automatically show the updated data

### Quick Publishing Tips:
- ✅ Always test tool URLs before publishing
- ✅ Use consistent category/tag names
- ✅ Keep your public sheet clean (no test data)
- ✅ Use your private sheet for experiments

---

## Troubleshooting

### "Missing Google Sheets configuration" error
- ✅ Check that environment variables are set in `.env.local` (local) or Netlify (production)
- ✅ Make sure variable names match exactly

### "Failed to fetch tools" error
- ✅ Verify your spreadsheet is public (anyone with link can view)
- ✅ Check that your API key is correct
- ✅ Make sure Google Sheets API is enabled in Google Cloud Console
- ✅ Verify spreadsheet ID is correct

### Tools not updating
- ✅ Remember: cache lasts 15 minutes
- ✅ Check that your spreadsheet data format matches the schema
- ✅ Look for console errors in browser devtools

### Rate limit errors
- ✅ The caching should prevent this!
- ✅ If you still hit limits, increase `CACHE_DURATION` in `src/app/api/tools/route.ts`

---

## Advanced: Adjust Cache Duration

To change how often data refreshes, edit `/src/app/api/tools/route.ts`:

```typescript
// Change from 15 minutes to 30 minutes:
const CACHE_DURATION = 30 * 60 * 1000;

// Or 5 minutes:
const CACHE_DURATION = 5 * 60 * 1000;
```

---

## Next Steps

Once this is working, you can:
- 📊 Add more columns to track additional data
- 🔄 Set up automatic cache clearing on spreadsheet changes (using Google Apps Script + webhook)
- 📈 Add analytics to track which tools are most popular
- 🎨 Customize the tool display with images from your spreadsheet

Enjoy your dynamic football tools directory! ⚽🎉
