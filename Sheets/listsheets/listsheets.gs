function ListSheets() { // Usage as custom function: =ListSheets( now() )
try {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets()
  var out = new Array( sheets.length+1 ) ;
  out[0] = [ "Sheet Name" ];
  // out[0] = [ "Name" , "gid" ];
  for (var i = 1 ; i < sheets.length+1 ; i++ ) out[i] = [sheets[i-1].getName()];
  return out
}
catch( err ) {
  return "#ERROR!" 
}
}