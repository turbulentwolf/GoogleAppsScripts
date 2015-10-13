var sheet = SpreadsheetApp.getActiveSheet();

function search()
{
   // Prompt the user for a search term
  var searchTerm = Browser.inputBox("Enter the folder ID of the files that you want to import:");

  var folder = DriveApp.getFolderById(searchTerm);

  
  sheet.clear();  

  // Insert Header
  sheet.appendRow(["FileName","File name (with link)", "Revision Date", "File Type", "DocumentID", "Meta Data","Folder name"]);  
  sheet.appendRow(["StringFilter - Hidden", "StringFilter", "DateFilter", "StringFilter - Hidden","StringFilter - Hidden", "csvFilter - Hidden","csvFilter"]);


  traverseFolders(folder, folder.getName());
}

function traverseFolders(folder, path)
{
  var files = folder.getFiles(), file, fileName;
  while (files.hasNext())
  {
    file = files.next();
    fileName = file.getName();
    sheet.appendRow([
      fileName,
      "<a href= " + file.getUrl() + " target= '_blank'>" + fileName + "</a>",
      file.getLastUpdated(),
//      commented this out because it was throwing errors for Google Sheets that contained scripts for some reason.
//      file.getFileType(),
      "",
      file.getId(),
      file.getDescription(),
      path]);
  }              
  var folders = folder.getFolders(), childFolder;
  while (folders.hasNext())
  {
    childFolder = folders.next();
    traverseFolders(childFolder, path + ", " + childFolder.getName());
  }
}
