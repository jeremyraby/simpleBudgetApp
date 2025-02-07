# How the sausage gets made

## Expenses & Goals Tab

### Conscious Spending Plan

`E3:F` contains a dropdown list and an `XLOOKUP` function to pull over your "categories to watch" amounts. This populates the scorecards on the Mobile tab as well helps calculate your Safe to Spend on the Activity tab.

Formula:
`=XLOOKUP(E3,A3:A20,C3:C)`

## Activity Tab

`C1:D1` contains the **Safe to Spend** formula that updates as you log spending

Formula:
`=ROUND(Tables!B4 - SUMIFS(Activity!B3:B,Activity!D3:D,"<>Cash",Activity!D3:D,"<>"&Categories!C2,Activity!D3:D,"<>"&Categories!C3)
,2)`

Explanation:
Takes the "main" Safe to Spend calculation from `Tables!B4` and subtracts spending logged on the Activity tab unless it's categorized as "Cash" or one of the planned "Categories to Watch" from the Categories Tab

