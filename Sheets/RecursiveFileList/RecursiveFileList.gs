var sheet = SpreadsheetApp.getActiveSheet();

// Because of the slow speed of reading and then writing row-by-row, this iterates in chunks using the below variable
var CHUNK_SIZE = 500;

function search()
{
   // Prompt the user for a search term
  var searchTerm = Browser.inputBox("Enter the folder ID of the files that you want to import:");
  // you can also specify the folder ID by using the below instead of above (comment out the above if using below)
  //var searchTerm = "PUTFOLDERIDHERE";

  var folder = DriveApp.getFolderById(searchTerm);

  
  sheet.clear();  

  // Insert Header
  sheet.appendRow(["FileName","File name (with link)", "Revision Date", "File Type", "DocumentID", "Meta Data","Folder name"]);  
  sheet.appendRow(["StringFilter - Hidden", "StringFilter", "DateFilter", "StringFilter - Hidden","StringFilter - Hidden", "csvFilter - Hidden","csvFilter"]);

  var rowList = [];
  traverseFolders(folder, folder.getName(), rowList);
}

function traverseFolders(folder, path, rowList)
{
  
  var files = folder.getFiles(), file, fileName;
  while (files.hasNext())
  {
    file = files.next();
    fileName = file.getName();
    rowList.push([
      fileName,
      "<a href= " + file.getUrl() + " target= '_blank'>" + fileName + "</a>",
      file.getLastUpdated(),
//      commented this out because it was throwing errors for Google Sheets that contained scripts for some reason.
//      file.getFileType(),
      "",
      file.getId(),
      file.getDescription(),
      path]);
    if (rowList.length > CHUNK_SIZE) {
      rowList = writeAndClearRows(rowList);
    }
  }              
  var folders = folder.getFolders(), childFolder;
  while (folders.hasNext())
  {
    childFolder = folders.next();
    traverseFolders(childFolder, path + ", " + childFolder.getName(), rowList);
  }
}

function writeAndClearRows(rowList) {
  var i;
  for (i = 0; i < rowList.length; i++) {
    sheet.appendRow(rowList[i]);
  }
  return [];
}
