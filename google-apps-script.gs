/**
 * BitNByte IT — Google Sheets Form Handler
 *
 * SETUP STEPS (one-time):
 * 1. Open Google Drive → create a new Google Sheet named "BitNByte Contacts"
 * 2. Create two tabs in the sheet:
 *    - "Contacts" with columns: Timestamp | Name | Email | Phone | Topic | Budget | Message | Source
 *    - "Newsletter" with columns: Timestamp | Email | Source
 * 3. In the sheet, go to: Extensions → Apps Script
 * 4. Delete the placeholder code, paste THIS entire file, and save (Ctrl+S)
 * 5. Click "Deploy" → "New deployment"
 *    - Type: Web app
 *    - Description: BitNByte form handler
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Click "Deploy" and AUTHORIZE when prompted
 * 7. Copy the Web app URL — looks like: https://script.google.com/macros/s/AKfy.../exec
 * 8. Paste that URL into src/data/site.json under googleSheets.contactFormUrl
 *    AND googleSheets.newsletterUrl (same URL works for both — this script routes by 'source')
 */

function doPost(e) {
  try {
    const params = e.parameter || {};
    const source = params.source || 'website-contact';
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const timestamp = new Date();

    if (source === 'newsletter') {
      const sheet = ss.getSheetByName('Newsletter') || ss.insertSheet('Newsletter');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Email', 'Source']);
      }
      sheet.appendRow([timestamp, params.email || '', source]);
    } else {
      const sheet = ss.getSheetByName('Contacts') || ss.insertSheet('Contacts');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Topic', 'Budget', 'Message', 'Source']);
      }
      sheet.appendRow([
        timestamp,
        params.name || '',
        params.email || '',
        params.phone || '',
        params.topic || '',
        params.budget || '',
        params.message || '',
        source,
      ]);

      // Optional: email notification to yourself
      try {
        MailApp.sendEmail({
          to: 'bitnbyteit1@gmail.com',
          subject: 'New BitNByte IT contact: ' + (params.name || 'Unknown'),
          body:
            'Name: ' + (params.name || '') + '\n' +
            'Email: ' + (params.email || '') + '\n' +
            'Phone: ' + (params.phone || '') + '\n' +
            'Topic: ' + (params.topic || '') + '\n' +
            'Budget: ' + (params.budget || '') + '\n\n' +
            'Message:\n' + (params.message || ''),
        });
      } catch (mailErr) {
        // mail quota may be exceeded — ignore silently
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('BitNByte IT form handler — POST only.')
    .setMimeType(ContentService.MimeType.TEXT);
}
