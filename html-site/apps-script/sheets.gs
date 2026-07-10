/**
 * Taxsi — form kayıtlarını Google Sheets'e yazan Apps Script.
 * Kurulum adımları: README-sheets.md
 *
 * Rezervasyonlar "Bookings" sekmesine, iletişim mesajları "Messages" sekmesine düşer.
 * Sekmeler yoksa ilk kayıtta otomatik oluşturulur.
 */

var BOOKING_HEADERS = [
  'Timestamp', 'Ref', 'Lang', 'Route', 'Date', 'Time', 'Passengers',
  'Round trip', 'Child seat', 'Price', 'Name', 'Phone', 'Notes', 'Page',
]
var MESSAGE_HEADERS = ['Timestamp', 'Lang', 'Name', 'Email', 'Message', 'Page']

function getSheet_(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(name)
  if (!sheet) {
    sheet = ss.insertSheet(name)
    sheet.appendRow(headers)
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold')
    sheet.setFrozenRows(1)
  }
  return sheet
}

function doPost(e) {
  var p = (e && e.parameter) || {}
  var now = new Date()

  if (p.type === 'contact') {
    getSheet_('Messages', MESSAGE_HEADERS).appendRow([
      now, p.lang || '', p.name || '', p.email || '', p.message || '', p.page || '',
    ])
  } else {
    getSheet_('Bookings', BOOKING_HEADERS).appendRow([
      now, p.ref || '', p.lang || '', p.route || '', p.date || '', p.time || '',
      p.passengers || '', p.roundTrip || '', p.childSeat || '', p.price || '',
      p.name || '', p.phone || '', p.notes || '', p.page || '',
    ])
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON)
}

// Tarayıcıdan URL'i açıp kurulumu test etmek için
function doGet() {
  return ContentService.createTextOutput('Taxsi sheets endpoint OK')
}
