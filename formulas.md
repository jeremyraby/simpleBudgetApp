# How the sausage gets made

This is a collection of each formula used on each worksheet, grouped by which section of the sheet the formula is in. Use this for troubleshooting if a formula breaks or if you want to change something on your own.

## Table of Contents
- [Expenses & Goals](https://github.com/jeremyraby/simpleBudgetApp/blob/main/formulas.md#expenses--goals-tab)
- [Categories](https://github.com/jeremyraby/simpleBudgetApp/blob/main/formulas.md#categories-tab)
- [Income](https://github.com/jeremyraby/simpleBudgetApp/blob/main/formulas.md#income-tab)
- [Activity](https://github.com/jeremyraby/simpleBudgetApp/blob/main/formulas.md#activity-tab)
- [Tips](https://github.com/jeremyraby/simpleBudgetApp/blob/main/formulas.md#tips-tab)
- [Tables](https://github.com/jeremyraby/simpleBudgetApp/blob/main/formulas.md#tables-tab)

## Expenses & Goals Tab

### Emergency Conscious Spending Plan

`E3:F` contains a dropdown list and an `XLOOKUP` function to pull over your "emergecy needs" amounts. These are used to calculate how much is needed for 1-12 months of no income on the Tables tab (`Tables!K2:L9`).

### Goal Calculator

`L7` contains a formula to calculate the difference, in months, between two dates.
`L8` subtracts the "current balance" from the "goal amount" to calculate a remaining balance.
`L9` divides the "remaining" amount in `L8` by the months in `L7`, unless `L7` is `0`

### Debt Ratios
`S3:S` contains a dropdown list and an `XLOOKUP` function to pull over your "Expenses & Goals" amounts.

### Formulas
| Cell | Formula |
| --- | --- |
| E3:F | `=(XLOOKUP(E3,A3:A20,C3:C)*2)` |
| L7 | `=DATEDIF(L4, L6, "M")` |
| L8 | `=L3 - L5` |
| L9 | `=IF(L7=0, "Goal date must be in the future", (L8 / L7))` |
| S3:S | `=(XLOOKUP(R3,A3:A20,C3:C)*2)` |

## Categories Tab

### Categories to Watch

`C2:D4` contains a dropdown list and an `XLOOKUP` function to pull over your "categories to watch" amounts. This populates the scorecards on the Mobile tab as well helps calculate your Safe to Spend on the Activity tab.

### Formulas

| Cell | Formula |
| --- | --- |
| D3:D4 | `=XLOOKUP(C2,'Expenses & Goals'!$A:$A,'Expenses & Goals'!$C:$C)` |

## Income Tab

`E1` contains a `QUERY` that calculates total income. This is used so that `$0` is used in varous other formulas if no income has been logged. If no income has yet been added, "Income Needed" will display.

### Formulas

| Cell | Formula |
| --- | --- |
| E1 | `=IFERROR(QUERY(Income!A:C, "SELECT SUM(C) LABEL SUM(C) 'Total Income'", 0),"Income Needed")` |

## Activity Tab

`C1:D1` contains the **Safe to Spend** formula that updates as you log spending. Takes the "main" Safe to Spend calculation from `Tables!B4` and subtracts spending logged on the Activity tab unless it's categorized as "Cash" or one of the planned "Categories to Watch" from the Categories tab.

Formula:
`=ROUND(Tables!B4 - SUMIFS(Activity!B3:B,Activity!D3:D,"<>Cash",Activity!D3:D,"<>"&Categories!C2,Activity!D3:D,"<>"&Categories!C3)
,2)`

## Tips Tab

`B2` multiplies `B1` by 1.2 then subtracts `B1` to calculate how much a 20% tip is.
`B3` sums `B1:B2`

| Cell | Formula |
| --- | --- |
| B2 | `=(Bill*1.2)-Bill` |
| B3 | `=SUM(Bill,Tip)` |

## Tables Tab

There are 4 pivot tables & 5 manual/self-made tables. All tables are named for what is being calculated, so if something breaks it should be realtively easy to recreate, most especially the pivot tables.

### Pivot Tables

Pivot tables are in the following ranges:

- `E:F`: Spending by Category
  - `Activity!A2:D49` 
- `N:O`: Average Spending by Category
  - `Archive!A2:D976` 
- `Q:R`: Average Income by Source
  - `Archive!G2:I976` 
- `T:V`: Short Term Goal Tracker
  - `'Expenses & Goals'!N2:P20` 

### Manual Tables

The manual tables generally consist of various formulas

#### Safe to Spend
- `A:C`
- This is where the figures for the Safe to Spend & "Categories to Watch" are calculated.
  - Col 1 references the category
  - Col 2 shows how much is planned for the category
  - Col 3 subtracts spending in that cateogory from the plan 

| Category | Planned | Actual |
| --- | --- | --- |
| Safe to Spend | `=IF(ISBLANK(Income!E2),0,ROUND(Income!E2 - SUM('Expenses & Goals'!C3:C) - SUMIFS(Activity!$B3:$B,Activity!$D3:$D,"Cash"),2))` | `=Activity!$C$1-SUMIFS(Activity!$B3:$B,Activity!$D3:$D,"Cash")` |
| `=Categories!$C2` | `=IF(ISBLANK(Income!E2),0,Categories!$D$2)` | `=B5-SUMIFS(Activity!$B$3:$B,Activity!$D$3:$D,"="&Categories!C2)` |
| `=Categories!$C3` | `=IF(ISBLANK(Income!E2),0,Categories!$D$3)` | `=B6-SUMIFS(Activity!$B$3:$B,Activity!$D$3:$D,"="&Categories!C3)` |
| Cash | 0 | `=SUMIF(Income!B$2:B,"Cash",Income!C$2:C)-(SUMIF(Activity!$D3:$D,"Cash",Activity!$B3:$B))` |

#### Conscious Spending Plan
- `H:I`
- Sums the total amount planned for each of the four Conscious Spending Plan categories

| Category | Amount |
| --- | --- |
| Needs | `=ROUND(SUMIF('Expenses & Goals'!$B$3:$B,"Need",'Expenses & Goals'!$C$3:$C),2)` |
| Wants | `=ROUND(SUMIF('Expenses & Goals'!$B$3:$B,"Want",'Expenses & Goals'!$C$3:$C) + Tables!B4,2)` |
| Savings | `=ROUND(SUMIF('Expenses & Goals'!$B$3:$B,"Savings",'Expenses & Goals'!$C$3:$C),2)` |
| Investment | `=ROUND(SUMIF('Expenses & Goals'!$B$3:$B,"Investment",'Expenses & Goals'!$C$3:$C),2)` |

#### Emergency Fund
- `K:L`
- Sums the amount of total *emergency* expenses, multiplied by 1/3/6/9/12 months, then multiplied by `1.15` to add 15% in order to account for "forgotten" expenses

| Timeframe | Amount |
| --- | --- |
| 1 month | `=round((SUM('Expenses & Goals'!$F3:F)*1.15),2)` |
| 3 months | `=round((SUM('Expenses & Goals'!$F3:F)*3)*1.15,2)` |
| 6 months | `=round((SUM('Expenses & Goals'!$F3:F)*6)*1.15,2)` |
| 9 months | `=round((SUM('Expenses & Goals'!$F3:F)*9)*1.15,2)` |
| 1 year | `=round((SUM('Expenses & Goals'!$F3:F)*12)*1.15,2)` |
| Have | `=ROUND(SUM('Expenses & Goals'!$I3:$I),2)` |

#### Income vs Spending
- `X:AB`
- Col 3 sums all of the income from the Archive tab if the month matches Col 1
- Col 4 sums all of the expenses from the Archive tab if the month matches Col 1
  -  Planned spending, eg what's in the Conscious Spending Plan as a Need or Want, is added to archived expenses to get a true figure for Total Spending
  -  Planned spending for Safe to Spend and Categories to Watch is then subtracted to prevent double counting 
- YTD Income sums all income for the year that is in the Archive tab

| Month (num) | Month (abr) | Income | Spending | YTD Income |
| --- | --- | --- | --- | --- |
| 1 | Jan | `=SUMIFS(Archive!$I$3:$I, ARRAYFORMULA(MONTH(Archive!$G$3:$G)),X4)` | `=SUMIFS(Archive!$B$3:$B, ARRAYFORMULA(MONTH(Archive!$A$3:$A)),X4)+(SUM($I$4:I$5)-SUM($B$4:B$6))` | `=SUM(Z4:Z15)` |
| 2 | Feb | `=SUMIFS(Archive!$I$3:$I, ARRAYFORMULA(MONTH(Archive!$G$3:$G)),X5)` | `=SUMIFS(Archive!$B$3:$B, ARRAYFORMULA(MONTH(Archive!$A$3:$A)),X5)+(SUM($I$4:I$5)-SUM($B$4:B$6))` | |
...
| 12 | Dec | `=SUMIFS(Archive!$I$3:$I, ARRAYFORMULA(MONTH(Archive!$G$3:$G)),X15)` | `=SUMIFS(Archive!$B$3:$B, ARRAYFORMULA(MONTH(Archive!$A$3:$A)),X15)+(SUM($I$4:I$5)-SUM($B$4:B$6))` | |









