# GoogleAppsScripts

Google Apps Scripts that I have found helpful over time. Some of these I have copied from others and some I have hacked together.

I can't promise that good practices are adhered to when creating these files as I am learning / have learned as I go.

It also goes without saying that these are not official / sanctioned by Google.

# What's included:
## Google Sheets

### createcopy
	* Creates a value-only copy of a Google Sheet.
	* Useful for when you want to export a copy of a sheet into excel but there are formulas that don't carry over correctly (e.g. query() functions).
	
### listsheets
	* Provides a vertical array of the names of all of the sheets.

### regexextractallrange
	* Similar to Sheet's regexextract() function except this one will return an array if multiple hits are found.
	* This can be applied to a single cell or a range of cells (to avoid rate limits on Google's function calls). Useful when you are trying to extract from many, many rows.

### ToSentenceCase (+ arrayToSentenceCase)
	* Converts contents of a cell or range to what I call "sentence case". Removes extraneous spaces, capitalizes letters after punctuation, and other fixings.
	* This was mostly provided by a friend.

### trackcollaborator
	* Tracks the person making edits to a row and adds their email address (gmail username) and the timestamp of the edit in the last 2 columns in that row.
