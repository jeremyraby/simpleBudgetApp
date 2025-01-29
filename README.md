# README
## Overview
This is a spending tracker that works like the [Simple](https://www.reviewed.com/money/features/simple-bank-review) banking app (closed in 2021 😭), keeping things easy and helping you stay organized. It's designed specifically for folks with *ADHD* and *dyscalculia*, so you won’t have to worry about complicated math or shelling out cash for fancy budgeting apps.

There are **8 sheets** in total, but you’ll mostly use it to keep an eye on your spending (**Activity**) and check your balances (**Mobile, Desktop**). To kick things off, you’ll set up your expenses, goals, spending categories, and income. Then you just log your daily spending and the **Safe to Spend** balance will automatically update to show you how much you can spend without going overboard.

**COPY to Google Drive** [here](https://docs.google.com/spreadsheets/d/1WeH6dPeiR9xXTVT8iCC9FC4vh0ithbkBIbOhTTYMYIU/edit?usp=sharing)

---
## In Detail

This is a **dupe** of the now-closed fintech bank and budget app **[Simple](https://www.reddit.com/r/personalfinance/comments/ksj1ho/simple_is_being_shut_down/)**. It combines elements of  

- **[Envelope budgeting](https://www.nerdwallet.com/article/finance/envelope-system#:~:text=%E2%80%9CCash%20stuffing%E2%80%9D%20%E2%80%94%20also%20known%20as%20the,to%20take%20an%20action%20on%20their%20website.)** (allocating money to specific categories)   

- **[The Conscious Spending Plan](https://www.iwillteachyoutoberich.com/)** (Ramit Sethi's approach)   

---

## 📌 How It Works  

The workbook has **8 sheets** but only a few are used daily.  

### 🔵 Everyday Use (Blue Tabs)
1. **Mobile** – A simplified dashboard for quick reference.  
2. **Activity** – Where you log daily expenses.  
3. **Desktop** – A larger dashboard with more visualizations.  

### 🟢 Setup & Updates (Green Tabs)
4. **Expenses & Goals** – Define planned expenses and savings goals.  
5. **Categories** – Set up spending and income categories.  
6. **Income** – Log your income when received.  

### 🟡 Behind-the-Scenes (Yellow Tabs)
7. **Archive** – Stores past transactions for long-term tracking.  
8. **Tables** – Handles calculations and reference data.  

🔹 **Tip:** Hide the **green and yellow tabs** after setup to keep your view clean.  

---

## 🛠 Setup (One-Time Tasks)  
>[!Tip] 🌶️ Tip 
>Try setting a timer (10-15 mins per section) to break setup into manageable chunks.  

### ✅ Step 1: Expenses & Goals *(~10 min)*
1. Enter your planned expenses & savings goals.  
2. Assign each to a category (*Need*, *Want*, or *Savings*).  
3. Enter any emergency savings you already have.  
4. 🔹 **Hide this sheet** when finished.  
#### 💰 Goal Calculator  

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

>[!Tip] 🌶️ Tip  
>- **Break it into smaller chunks** – If the monthly savings feels too high (your Safe to Spend is unsustainably low), adjust your goal date or split the goal into phases.  
>- **Automation** – Set up automated transfers between your checking & savings accounts each payday.  
>- **Track progress** – Check your savings balance each payday to stay on track.

### ✅ Step 2: Categories *(~5 min)*
1. Define spending categories (e.g., Groceries, Rent, Fun Money).  
2. Pick **1-2 categories to watch** (for overspending awareness). 
	1. These should be planned in the **Expenses & Goals** sheet.
3. List income sources (e.g., Paycheck, Side Hustle, Cash Refunds).  
4. 🔹 **Hide this sheet** when finished.  

### ✅ Step 3: Income *(Only When Paid)*
1. Enter income when received (**date, source, amount, notes**).  
	1. Cash gifts, ATM withdrawals, and refunds all count
2. Ignore the `#VALUE` error in `E1`—it disappears when income is logged.  
3. 🔹 **Hide this sheet** after entering income.  

---

## 💰 Daily & Pay Cycle Workflow  

### 🔹 Daily: Log Purchases in Activity *(~30 sec)*
1. Enter purchases (**date, amount, store, category, notes**).  
2. Check your **Safe to Spend** balance at the top of **Activity** or **Mobile**.  

### 🔹 End of Pay Cycle: Archive Data *(~5 sec)*
1. Click the 🔵 **Archive Data** button (top of **Activity** sheet).  
2. This **clears** your spending/income logs & saves them in **Archive**.  

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
✅ Yes! Go to **Data > Protect Sheets & Ranges** and select the yellow-highlighted cells and sheets. See video below for more info:

<iframe width="560" height="315" src="https://www.youtube.com/embed/jBAr_Tx2SKQ?si=DZhnaKRwy6B60GXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 7️⃣ What's a "Conscious Spending Plan?" How's it different than a budget?
📌 Ramit Sethi calls budgets "Conscious Spending Plans" and I tend to like the idea more than "budgets." I've simplified this idea a bit, though, into just "Needs," Wants," and "Savings." Learn more  in the video below:

<iframe width="600" height="400" src="https://www.youtube.com/embed/unbA3nASp6g?si=ILGMKzuJYsJhrUfL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 8️⃣ What if I don't know which "categories to watch?"
✅ Leave those options blank for a couple of pay cycles and use the **Desktop** to help identify categories where you could cut back.

---

## 🧠 Tips for ADHD & Dyscalculia Users
- **Make it a habit**: Use a **daily notification** (Google Calendar, phone alarm) to log expenses.
	- **Anchor it to other habits**: Do you use a receipt app like Fetch or Upside to get cash back rewards? Log your expenses whenever you scan the receipts!
- **Use the Mobile tab**: It’s designed for fast, on-the-go reference.  
- **Customize categories**: Rename categories so they make sense to you! 
