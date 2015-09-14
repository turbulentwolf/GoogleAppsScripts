function onEdit(event)
{ 
  var sheet = SpreadsheetApp.getActiveSheet();
  if(sheet.getName()=='Source Data'){
    // alternatively if(sheet.getSheetId()==0){
    var actRng = event.source.getActiveRange();
    var index = actRng.getRowIndex();
    var cindex = actRng.getColumnIndex();

    var dateCol = sheet.getLastColumn();  
    var lastCell = sheet.getRange(index,dateCol);
    var date = Utilities.formatDate(new Date(), "GMT-5", "MM-dd-yy HH:mm");

    lastCell.setValue(date);
  
    var user = Session.getActiveUser().getEmail();
    sheet.getRange(index, (dateCol - 1)).setValue(user);
  } //end if
};
