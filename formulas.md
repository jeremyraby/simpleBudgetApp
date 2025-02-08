# How the sausage gets made

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

`E1` contains a `QUERY` that calculates total income. This is used so that `$0` is used in varous other formulas if no income has been logged.

### Formulas

| Cell | Formula |
| --- | --- |
| E1 | `=QUERY(Income!A:C, "SELECT SUM(C) LABEL SUM(C) 'Total Income'", 0) |

## Activity Tab

`C1:D1` contains the **Safe to Spend** formula that updates as you log spending. Takes the "main" Safe to Spend calculation from `Tables!B4` and subtracts spending logged on the Activity tab unless it's categorized as "Cash" or one of the planned "Categories to Watch" from the Categories tab.

Formula:
`=ROUND(Tables!B4 - SUMIFS(Activity!B3:B,Activity!D3:D,"<>Cash",Activity!D3:D,"<>"&Categories!C2,Activity!D3:D,"<>"&Categories!C3)
,2)`

## Tips Tab

`B2` multiplies `B1` by 1.2 then subtracts `B1` to calculate how much a 20% tip is.
`B3` sums `B1:B2`

## Tables Tab





