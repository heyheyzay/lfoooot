# Google Sheets Integration Setup Guide

This guide will help you connect the Submit Tool form to your Google Sheets spreadsheet.

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Footfolio Tool Submissions" (or any name you prefer)
4. Set up your column headers in Row 1:

```
A1: Timestamp
B1: Tool Name
C1: URL
D1: Category
E1: Pricing
F1: Platforms
```

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Create a new row with the data
    const newRow = [
      data.timestamp || new Date().toISOString(),
      data.toolName || '',
      data.url || '',
      data.category || '',
      data.pricing || '',
      data.platforms || ''
    ];

    // Append the row to the sheet
    sheet.appendRow(newRow);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (💾)
5. Name your project "Footfolio Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Fill in the settings:
   - **Description**: "Footfolio Tool Submission Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** - you'll need this for the next step

## Step 4: Update Your Form Code

1. Open `/Users/zaynab/Desktop/footfolio/src/app/submit/page.tsx`
2. Find this line (around line 32):
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your Web App URL from Step 3
4. It should look like:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```

## Step 5: Test Your Form

1. Go to `http://localhost:3000/submit`
2. Fill out the form with test data
3. Click "Submit Tool"
4. Check your Google Sheet - you should see a new row with your test data!

## Optional: Format Your Google Sheet

Make your sheet easier to read:

1. **Freeze the header row**: Select row 1, click View → Freeze → 1 row
2. **Auto-resize columns**: Select all columns, double-click any column border
3. **Add data validation**: You can add dropdowns for Category, Pricing, etc.
4. **Apply formatting**: Make headers bold, add borders, etc.

## Troubleshooting

### Form submission says "error"
- Make sure your Google Apps Script is deployed as "Anyone" can access
- Check that the Web App URL is correct in your code
- Look at the Apps Script execution logs: Apps Script Editor → Executions

### Data not appearing in sheet
- Verify column headers match exactly
- Check the Apps Script logs for errors
- Make sure the script has permission to edit the spreadsheet

### CORS errors
- The form uses `mode: 'no-cors'` which is normal for Google Apps Script
- You won't see detailed response data, but submissions will still work

## Next Steps

Once data is collecting in your Google Sheet, you can:
- Review submissions manually
- Export data as needed
- Create additional columns for status (Approved/Rejected)
- Set up email notifications using Google Apps Script triggers
- Connect to other tools via Zapier or similar services

## Advanced: Adding More Fields

If you want to add more fields to the form later:

1. Update the form in `src/app/submit/page.tsx`
2. Add the new column to your Google Sheet
3. Update the `newRow` array in the Apps Script to include the new field
4. Redeploy the Apps Script (Deploy → Manage deployments → Edit → Version: New version → Deploy)
