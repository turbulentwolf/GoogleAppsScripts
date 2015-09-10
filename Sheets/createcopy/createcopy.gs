function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems=[{name: 'Make a Copy', functionName: 'makeCopyOfSpreadsheet'}];
  spreadsheet.addMenu('Script', menuItems);    
};

function formatDateString(date) {
  return Utilities.formatDate(date, Session.getTimeZone(), 'yyyy-MM-dd H:mm');
};

function makeCopyOfSpreadsheet() {
  var date = formatDateString(new Date());
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var folder = DriveApp.getFileById(ss.getId()).getParents().next();//.getId();
  var file = DriveApp.getFileById(ss.getId()).makeCopy(ss.getName()+" - "+date+" - (Values Only)", folder);
  var newSS = SpreadsheetApp.open(file);
  var s = newSS.getSheets();
  for(var i=0;i<s.length;i++) {
    var r = s[i].getDataRange();
    var v = r.getValues();
    r.setValues(v);    
  }
};
