/**

* Archives the data from the "Activity" and "Income" sheets into the "Archive" sheet.

*

* This function:

* - Retrieves the spending data from the "Activity" sheet and appends it to the "Archive" sheet.

* - Clears the archived data from the "Activity" sheet after archiving.

* - Retrieves the income data from the "Income" sheet and appends it to the "Archive" sheet.

* - Clears the archived income data from the "Income" sheet.

* - Displays a confirmation alert to the user once the data has been successfully archived.

*/

function archiveData() {

// Open the active spreadsheet

var ss = SpreadsheetApp.getActiveSpreadsheet();

// Define the sheets

var activitySheet = ss.getSheetByName("Activity");

var incomeSheet = ss.getSheetByName("Income");

var archiveSheet = ss.getSheetByName("Archive");

// Archive "Activity" data

var activityData = activitySheet.getRange(3, 1, activitySheet.getLastRow() - 2, 5).getValues(); // Start at row 3

if (activityData.length > 0 && activityData[0][0] !== "") {

// Calculate the next empty row in the Expenses section (A:E)

var lastExpenseRow = archiveSheet.getRange("A:A").getValues().filter(String).length;

var activityArchiveRange = archiveSheet.getRange(lastExpenseRow + 1, 1, activityData.length, activityData[0].length);

activityArchiveRange.setValues(activityData);

activitySheet.getRange(3, 1, activitySheet.getLastRow() - 2, 5).clearContent();

}

  

// Archive "Income" data

var incomeData = incomeSheet.getRange(2, 1, incomeSheet.getLastRow() - 1, 4).getValues(); // A2:D for income

if (incomeData.length > 0 && incomeData[0][0] !== "") {

// Find the first empty row in the Income section (G:J)

var lastIncomeRow = archiveSheet.getRange("G:G").getValues().filter(String).length;

var incomeArchiveRange = archiveSheet.getRange(lastIncomeRow + 1, 7, incomeData.length, incomeData[0].length); // Column 7 = G

incomeArchiveRange.setValues(incomeData); // Archive the income data

incomeSheet.getRange(2, 1, incomeSheet.getLastRow() - 1, 4).clearContent(); // Clear the income data

}

  

// Show a confirmation alert

SpreadsheetApp.getUi().alert("Spending and income data archived successfully!");

}
