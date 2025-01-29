# README

This script is designed to automate the archiving process for two specific sheets—**Activity** and **Income**—in a Google Sheets document. It moves the data from these sheets to an **Archive** sheet, clears the data from the original sheets, and provides a confirmation alert once the process is complete.

## Features
- Archives data from the "Activity" sheet and moves it to the "Archive" sheet.
- Archives data from the "Income" sheet and moves it to the "Archive" sheet.
- Clears the archived data from both the "Activity" and "Income" sheets.
- Provides a confirmation alert after successful archiving.

## Functionality Breakdown

### 1. Open the Active Spreadsheet
The script starts by opening the active spreadsheet in Google Sheets.

### 2. Access Sheets
It then retrieves three sheets in the document:
- **Activity**: Where the spending data is stored.
- **Income**: Where the income data is stored.
- **Archive**: Where the data will be stored after being archived.

### 3. Archive "Activity" Data
- The script grabs the spending data from the "Activity" sheet, starting from row 3 to the last row of data.
- The data is appended to the "Archive" sheet in the next available row, starting from column A to E.
- After successfully appending the data, the script clears the original data from the "Activity" sheet.

### 4. Archive "Income" Data
- The script retrieves the income data from the "Income" sheet, starting from row 2 to the last row of data.
- This data is appended to the "Archive" sheet starting from column G to J (columns G through J are designated for income data).
- After appending the data, the original income data is cleared from the "Income" sheet.

### 5. Display a Confirmation Alert
Once both datasets are successfully archived, a confirmation message is displayed to the user saying:  
"Spending and income data archived successfully!"

## How It Works
- **Data Retrieval**: The script uses `.getRange()` to fetch data from the "Activity" and "Income" sheets.
- **Archiving**: It appends this data to the next available rows in the "Archive" sheet using `.setValues()`.
- **Clearing Data**: After archiving, the script uses `.clearContent()` to remove the old data from the original sheets.
- **User Feedback**: A simple confirmation alert is shown with `SpreadsheetApp.getUi().alert()`.

## How to Use

1. Open the Google Sheets document where you want to run the script.
2. Open the **Script Editor** by clicking on **Extensions** > **Apps Script**.
3. Paste the script code into the editor.
4. Save the project.
5. You can now run the `archiveData()` function from the script editor or set it up to run automatically (e.g., on a time trigger).
