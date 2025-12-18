# Security Fix - API Key Exposure

## Issue Detected
GitHub detected an exposed Google API Key in `add-tools-to-sheet.js`.

## Actions Taken

### 1. ✅ Verified .gitignore
- Confirmed `.env` and `.env*.local` are already in `.gitignore`
- Future commits will not include environment files

### 2. ✅ Updated add-tools-to-sheet.js
- Removed hardcoded API key and Spreadsheet ID
- Updated to use environment variables from `.env` file
- Added validation to ensure required environment variables are set

### 3. ✅ Installed dotenv
- Added `dotenv` package to handle environment variables in Node.js scripts

### 4. ✅ .env.example exists
- Already has placeholder values for documentation

## Next Steps (Manual - IMPORTANT!)

### 1. Revoke the Old API Key
⚠️ **CRITICAL: You must revoke the exposed API key immediately**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Credentials"
3. Find the API key: `AIzaSyA_-BCrRf91OvMb5vunSsMFjPiKbi_6cVE`
4. Click on it and select "DELETE" or "REGENERATE"

### 2. Create a New API Key
1. In Google Cloud Console, click "Create Credentials" > "API Key"
2. Copy the new API key
3. **Restrict the API key:**
   - Click on the new key
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Sheets API"
   - Under "Application restrictions", set to "HTTP referrers" or "IP addresses" if possible
   - Save restrictions

### 3. Update Your Local .env.local File
Create or update `/Users/zaynab/Desktop/footfolio/.env.local` with:

```env
GOOGLE_SHEETS_API_KEY=your_new_api_key_here
GOOGLE_SHEETS_SPREADSHEET_ID=1aFl5gHiVG-Ahrsil9TDY1GkGf1r3RmtjF3uvrW6ZOrc
GOOGLE_SHEETS_RANGE=Sheet1!A2:L
```

Replace `your_new_api_key_here` with your new API key.

### 4. Verify .env.local is Not Tracked
Run this command to ensure .env.local is ignored:
```bash
git status
```

You should NOT see `.env.local` in the list of changes.

### 5. Update Netlify Environment Variables
If you deploy to Netlify:
1. Go to your Netlify dashboard
2. Navigate to Site settings > Environment variables
3. Update `GOOGLE_SHEETS_API_KEY` with the new key
4. Update `GOOGLE_SHEETS_SPREADSHEET_ID` if needed
5. Trigger a new deployment

### 6. Commit the Security Fix
```bash
git add .gitignore add-tools-to-sheet.js package.json package-lock.json .env.example
git commit -m "Security fix: Remove exposed API key and use environment variables"
git push origin main
```

## Prevention
- ✅ `.env` files are in `.gitignore`
- ✅ All scripts now use environment variables
- ✅ `.env.example` documents required variables without exposing secrets
- ⚠️ Always double-check commits don't include secrets before pushing

## Files Modified
- `add-tools-to-sheet.js` - Now uses environment variables
- `package.json` - Added dotenv dependency
- `.gitignore` - Already properly configured

## How to Use add-tools-to-sheet.js After Fix
1. Ensure `.env.local` has the new API key
2. Run: `node add-tools-to-sheet.js`
3. The script will automatically load credentials from `.env.local`
