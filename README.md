# Budget Master - A Simple Budgeting Website 

This is a simple budgeting website that lets you manage your finances by adding and displaying incomes and expenses. The website stores totals in `sessionStorage` so that data persists during the session. The site offers features such as income and expense tracking, updating disposable income, and transferring funds to savings.

## Features

- **Track Incomes and Expenses**: Add new incomes and expenses with details such as name, amount, and whether they are recurring.
- **Display Incomes and Expenses**: View lists of current incomes and expenses, with the ability to update them as necessary.
- **Calculate Totals**: Calculate and display the total income, total expense, and disposable income.
- **Add to Savings**: Transfer funds from disposable income to savings.

## Code Overview

The code consists of functions and classes to handle incomes and expenses, update and display data, and manage user interactions.

- **Income Class**: Represents an income with a name, amount, and recurring flag.
- **Expense Class**: Represents an expense with a name, amount, and recurring flag.
- **Functions**:
    - `displayIncomes()`: Displays the list of incomes and updates the total income in `sessionStorage`.
    - `displayExpenses()`: Displays the list of expenses and updates the total expense in `sessionStorage`.
    - `addNewIncome()`: Prompts the user for new income details, adds the income, and updates the display.
    - `addNewExpense()`: Prompts the user for new expense details, adds the expense, and updates the display.
    - `addToSave()`: Allows the user to move funds from disposable income to savings, updating the values and display accordingly.
    - `updateDispIncome()`: Calculates and updates the disposable income and savings, updating the display accordingly.

## Initial Setup

The website initializes some default incomes and expenses as follows:

- **Incomes**: Salary, freelance projects, rental income, stock dividends, and birthday gifts.
- **Expenses**: Rent, groceries, entertainment, utilities, and car maintenance.

## Event Listeners

Event listeners are added to the buttons for adding new income, new expense, and transferring funds to savings.

## How to Use

1. **Add New Income**: Click the "Add New Income" button and follow the prompts.
2. **Add New Expense**: Click the "Add New Expense" button and follow the prompts.
3. **Add to Savings**: Click the "Add to Savings" button and follow the prompts.
4. **View Totals**: The website will automatically display total income, total expense, and disposable income.

## How to Run the Code

1. Clone or download the repository.
2. Open the HTML file in your web browser to start using the website.

## License

This project is licensed under the MIT License. Please see the [LICENSE](LICENSE) file for details.
