# README
## Overview
This is a spending tracker that works like the [Simple](https://www.reviewed.com/money/features/simple-bank-review) banking app (closed in 2021 😭), to keep things easy and help you stay organized. It's designed specifically for folks with ADHD and dyscalculia, so you won’t have to worry about complicated math or shelling out cash for ultimately unhelpful budgeting apps.

There are **9 sheets** in total, but you’ll mostly use it to keep an eye on your spending (**Activity**) and check your balances (**Mobile, Desktop**). To kick things off, you’ll set up your expenses, goals, spending categories, and income. Then you just log your daily spending and the **Safe to Spend** balance will automatically update to show you how much you can spend without going overboard.

**Copy to your Google Drive** [here](https://docs.google.com/spreadsheets/d/1WeH6dPeiR9xXTVT8iCC9FC4vh0ithbkBIbOhTTYMYIU/edit?usp=sharing)

Read up on recent **updates** to the sheet [here](https://github.com/jeremyraby/simpleBudgetApp/blob/main/changelog.md)

---
## Introduction

This is a **dupe** of the now-closed fintech bank and budget app **[Simple](https://www.reddit.com/r/personalfinance/comments/ksj1ho/simple_is_being_shut_down/)**. It combines elements of  

- **[Envelope budgeting](https://www.nerdwallet.com/article/finance/envelope-system#:~:text=%E2%80%9CCash%20stuffing%E2%80%9D%20%E2%80%94%20also%20known%20as%20the,to%20take%20an%20action%20on%20their%20website.)** (allocating money to specific categories)   

- **[The Conscious Spending Plan](https://www.iwillteachyoutoberich.com/conscious-spending-basics/)** (Ramit Sethi's approach)

## Table of Contents
- [How It Works](https://github.com/jeremyraby/simpleBudgetApp/blob/main/README.md#-how-it-works)
- [Set Up](https://github.com/jeremyraby/simpleBudgetApp/blob/main/README.md#-setup-one-time-tasks)
- [Workflow](https://github.com/jeremyraby/simpleBudgetApp/blob/main/README.md#-daily--pay-cycle-workflow)
- [Dashboards](https://github.com/jeremyraby/simpleBudgetApp/tree/main?tab=readme-ov-file#dashboards)
- [FAQ](https://github.com/jeremyraby/simpleBudgetApp/blob/main/README.md#-faq)

---

## 📌 How It Works  

The workbook has **9 sheets** but only a few are used daily.

> Screenshots of each sheet can be seen in the file list above

### 🔵 Everyday Use (Blue Tabs)
1. [**Mobile**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/mobile_v1.01.jpg) – A simplified dashboard for quick reference.  
2. [**Activity**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/activity_light.jpg) – Where you log daily expenses.
3. [**Tip Calc**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/tip_calc.jpg) - A default 20% tip calculator. 
4. [**Desktop**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/desktop.jpg) – A larger dashboard with more visualizations.  

### 🟢 Setup & Updates (Green Tabs)
5. [**Expenses & Goals**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/expenses_goals.jpg) – Define planned expenses and savings goals.  
6. [**Categories**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/categories.jpg) – Set up spending and income categories.  
7. [**Income**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/income.jpg) – Log your income when received.  

### 🟡 Behind-the-Scenes (Yellow Tabs)
8. [**Archive**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/archive.jpg) – Stores past transactions for long-term tracking.  
9. [**Tables**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/tables.jpg) – Handles calculations and reference data.  

> Hide the **green and yellow tabs** after setup to keep your view clean.  

---

## 🛠 Setup (One-Time Tasks)  

>Try setting a timer (10-15 mins per section) to break setup into manageable chunks.  

### ✅ Step 1: Expenses & Goals *(~10 min)*
![Expenses & Goals Tab](https://github.com/jeremyraby/simpleBudgetApp/blob/main/expenses_goals.jpg)
1. Enter your planned expenses & savings goals.
   - If you enter your pre-tax investment contributions, e.g. 401(k), as a "savings" expense, you can also enter it as Income to get a more complete "savings rate" calculation on the Desktop dashboard. 
2. Assign each to a category (*Need*, *Want*, or *Savings*).  
3. Enter any emergency savings you already have.  
4. 🔹 **Hide this sheet** when finished.  
#### 💰 [Goal Calculator ](https://github.com/jeremyraby/simpleBudgetApp/blob/main/goal_calc.jpg) 
![Goal Calculator](https://github.com/jeremyraby/simpleBudgetApp/blob/main/goal_calc.jpg)
The **Goal Calculator** in the **Expenses & Goals** sheet helps you determine how much to save per month to reach a financial goal by a specific deadline.  

##### 🔹 How It Works 
1. **Enter your goal amount** – How much you need to save.  
2. **Enter today’s date** – The starting point for calculations.  
3. **Enter your current balance** – How much you’ve already saved.  
4. **Enter your target date** – When you need the money.  
5. The system calculates how much you should save per month.  

##### 📊 Example  
| Input  | Example Value |
|--------|--------------|
| Goal Amount | `$1,200` |
| Today's Date | `02/01/2025` |
| Current Balance | `$200` |
| Date Needed | `06/30/2025` |
| **Save per Month** | `$250` |
 
>- **Break it into smaller chunks** – If the monthly savings feels too high (your Safe to Spend is unsustainably low), adjust your goal date or split the goal into phases.  
>- **Automation** – Set up automated transfers between your checking & savings accounts each payday.  
>- **Track progress** – Check your savings balance each payday to stay on track.

#### 💰 [Goal Tracker](https://github.com/jeremyraby/simpleBudgetApp/blob/main/goal_calc.jpg)
![Goal Tracker](https://github.com/jeremyraby/simpleBudgetApp/blob/main/goal_tracker.jpg)
The **Goal Tracker** in the **Expenses & Goals** sheet helps you keep an eye on your savings goals.

##### 🔹 How It Works
1. **Choose your goal name** – You can get these from the dropdown list (taken from the earlier categories you listed) or type in your own.
2. **Enter your goal amount** – How much you need to save.
3. **Enter your current balance** – How much you’ve already saved.
4. **View your progress** - Track your progress on the [Desktop](https://github.com/jeremyraby/simpleBudgetApp/blob/main/desktop.jpg) dashboard!

### ✅ Step 2: [Categories](https://github.com/jeremyraby/simpleBudgetApp/blob/main/categories.jpg) *(~5 min)*
![Categories tab](https://github.com/jeremyraby/simpleBudgetApp/blob/main/categories.jpg)
1. Define spending categories (e.g., Groceries, Rent, Fun Money).  
2. Pick **1-2 categories to watch** (for overspending awareness). 
	1. These should be planned in the **Expenses & Goals** sheet.
3. List income sources (e.g., Paycheck, Side Hustle, Cash Refunds).  
4. 🔹 **Hide this sheet** when finished.  

### ✅ Step 3: [Income](https://github.com/jeremyraby/simpleBudgetApp/blob/main/income.jpg) *(Only When Paid)*
![Income tab](https://github.com/jeremyraby/simpleBudgetApp/blob/main/income.jpg)
1. Enter income when received (**date, source, amount, notes**).  
    - Cash gifts, ATM withdrawals, and refunds all count
    - If you enter your pre-tax investment contributions, e.g. 401(k), as a "savings" expense, you can also enter it as Income to get a more complete "savings rate" calculation on the Desktop dashboard. This, obviously, means you need to enter this data each pay cycle, as opposed to simply your net income on your pay stub.
2. Ignore the `#VALUE` error in `E1`—it disappears when income is logged.  
3. 🔹 **Hide this sheet** after entering income.  

---

## 💰 Daily & Pay Cycle Workflow  

### 🔹 Daily: Log Purchases in [Activity](https://github.com/jeremyraby/simpleBudgetApp/blob/main/activity_light.jpg) *(~30 sec)*
![Logging transactions](https://github.com/jeremyraby/simpleBudgetApp/blob/main/activity_light.jpg)
1. Check your **Safe to Spend** balance at the top of **Activity** or **[Mobile](https://github.com/jeremyraby/simpleBudgetApp/blob/main/mobile_v1.01.jpg)**.
2. Enter purchases (**date, amount, store, category, notes**).  
3. Calculate tips on **Tip Calc**

#### [Tip Calc](https://github.com/jeremyraby/simpleBudgetApp/blob/main/tip_calc.jpg)
![Calculating 20% tips](https://github.com/jeremyraby/simpleBudgetApp/blob/main/tip_calc.jpg)
Simple used to send push notifications for how much a 20% tip would be if the app recognized the vendor as a restaurant and I've made a similar function on this sheet.

##### 🔹 How It Works
1. Enter the check/bill amount.
2. The system calculates how much a **20%** tip would be and how much the total is, including the tip.

##### 📊 Example 
|    |     |
| --- | --- |
| Bill | $10.00 |
| Tip | $2.00 |
| Total | $12.00 |

### 🔹 End of Pay Cycle: Archive Data *(~5 sec)*
![Archiving old data](https://github.com/jeremyraby/simpleBudgetApp/blob/main/archive.jpg)
1. Click the 🔵 **[Archive Data](https://github.com/jeremyraby/simpleBudgetApp/blob/main/activity_desktop.jpg)** button (top of **Activity** sheet).  
2. This **clears** your spending/income logs & saves them in **Archive**.  

---

## Dashboards

There are two dashboards built for quickly analyzing your financial situation, [**Mobile**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/mobile_v1.01.jpg) and [**Desktop**](https://github.com/jeremyraby/simpleBudgetApp/blob/main/desktop.jpg), named for the devices on which they're designed to be viewed.

### Mobile
![Mobile dashboard](https://github.com/jeremyraby/simpleBudgetApp/blob/main/mobile_v1.01.jpg)
The Mobile dashboard is best viewed using the Google Sheets mobile app and may not be even the least usable on desktop. It contains five visualizations, 3 "scorecards" and a doughnut chart, that should provide the most necessary and useful information when you're out in the wild:

#### Scorecards 

- Safe to Spend -- much money you have available for "guilt free spending"
- 2 scorecards for your "categories to watch," again, to help prevent overspending in these areas
- Cash -- if you've happened to enter a cash balance on the Income sheet, it will display here and be updated as you mark spending as "Cash"

#### Doughnut Chart
This displays a breakdown of your spending by category    

### Desktop
![Desktop dashboard](https://github.com/jeremyraby/simpleBudgetApp/blob/main/desktop.jpg)
The Desktop dashboard is best viewed using the Google Sheets web app and isn't convenient on mobile devices. It contains six visualizations that should provide a more detailed analysis; each graph answers a question about your spending habits.

#### First Row

##### What's my spending plan?

This is a doughnut chart built from the "conscious spending plan" you put together on the Expenses & Goals sheet. Also displayed is a scorecard chart showing your planned Safe to Spend.

##### Am I overspending?

This line chart plots your total income against your total spending. It's important to note that there will *always* be a non-zero level of spending, equal to your planned "needs" and "wants," displayed for months where no spending has been archived.

##### What am I buying?

This doughnut chart displays your average spending per category. Use it to help determine which, if any, categories need to be "watched" or if you can afford to let loose a bit more in other categories.

#### Second Row

##### What do I need for emergencies?

This bar chart shows how much you need to save to cover 1 - 12 months of necessary expenses as well as how much you currently have saved. All of the calculations for these figures are multiplied by `1.15` to add 15% to the estimate, per [*I Will Teach You to be Rich*](https://www.iwillteachyoutoberich.com/books/), to account for any "forgotten" expenses. Feel free to change this if you want.

##### How's my goal progress?

This bar chart tracks your progress toward a short term savings goal.

##### Where do I get my money?

This doughnut chart displays your average income per source, in the case you're including multiple incomes, e.g. side hustles or your spouse's salary. I would use this to determine if any side hustles aren't worth my time relative to others, but it could also be useful for splitting household bills according to relative income. Also included is a scorecard displaying total income.

---

## ❓ FAQ 

### 1️⃣ Why are some cells/ranges yellow?  
🟡 **yellow cells contain formulas**—avoid editing unless troubleshooting.  

### 2️⃣ What if I forget to log a purchase?  
✅ Use the **end-of-week check-in** method: once a week, review your bank statement or transaction history and fill in any missing expenses.  

### 3️⃣ What happens if I don’t press the Archive button?  
📌 The system won’t reset, and **old expenses will carry over** into the next cycle. Set a **calendar reminder** to press the button on payday.  

### 4️⃣ Why is my Safe to Spend different from my bank balance?  
📌 Safe to Spend reflects what’s **left after planned expenses**. It’s not your raw bank balance.  

### 5️⃣ How do I unhide sheets if I need to edit something?  
🔹 **Right-click any tab > View All Sheets > Click the one you need.**  

### 6️⃣ Can I protect formulas from accidental edits?  
✅ Yes! Go to **Data > Protect Sheets & Ranges** and select the yellow-highlighted cells and sheets. Watch [this video](https://www.youtube.com/embed/jBAr_Tx2SKQ?si=DZhnaKRwy6B60GXz) for more info.

### 7️⃣ What's a "Conscious Spending Plan?" How's it different than a budget?
📌 Ramit Sethi calls budgets "Conscious Spending Plans" and I tend to like the idea. I've simplified it a bit, though, into just "Needs," Wants," and "Savings." Your Safe to Spend counts as a "Want." Watch [this video](https://www.youtube.com/embed/unbA3nASp6g?si=ILGMKzuJYsJhrUfL) for more info.

### 8️⃣ What if I don't know which "categories to watch?"
✅ Leave those options blank for a couple of pay cycles and use the **Desktop** to help identify categories where you could cut back.

### 9️⃣ How do I authorize Apps Script?  
Good question! Follow the steps below when you first go to archive data:
1. Click "OK" when prompted with "Authorization Required"
2. Choose which Google account you want to use 
3. Click "Advanced" when you see the "Google hasn't verified this app" screen
4. Click "Go to ArchiveBudgetActivity (unsafe)"
5. Click "Allow" on the "ArchiveBudgetActivity wants to access your Google Account"
6. The script will run and you should see "Spending and income data archived successfully!"

> Screenshots for the above can be found in the file list above

> A README for the Apps Script is available [here](https://github.com/jeremyraby/simpleBudgetApp/blob/main/AppsScriptArchiveBudgetActivityREADME.md) and the actual code is [here](https://github.com/jeremyraby/simpleBudgetApp/blob/main/ArchiveBudgetActivity.ts) for you to review.
---

## 🧠 Tips for ADHD & Dyscalculia Users
- **Make it a habit**: Use a **daily notification** (Google Calendar, phone alarm) to log expenses.
	- **Anchor it to other habits**: Do you use a receipt app like Fetch or Upside to get cash back rewards? Log your expenses whenever you scan the receipts!
- **Use the Mobile tab**: It’s designed for fast, on-the-go reference.  
- **Customize categories**: Rename categories so they make sense to you! 
