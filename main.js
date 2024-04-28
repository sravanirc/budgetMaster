//This is the javascript file for a simepl budgeting website that lets you update incomes and expenses.
// initialising savings to 0 in sessionStorage
sessionStorage.setItem("save", 0);
sessionStorage.setItem(
  "dispIncome",
  sessionStorage.getItem("totalIncome") - sessionStorage.getItem("totalExpense")
);

//Income class
class income {
  constructor(name, amount, isRecurring) {
    this.name = name;
    this.amount = parseInt(amount);
    this.isRecurring = isRecurring;
  }
}

//This function displays the incomes and also stores the income total in sessionStorage
function displayIncomes() {
  let ulIncome = document.getElementById("income");
  ulIncome.innerHTML = "";
  incomes.forEach((income) => {
    let li = document.createElement("li");
    li.innerHTML = ` ${income.name} - ${income.amount} - Recurring? ${income.isRecurring} `;
    ulIncome.appendChild(li);
  });
  //calculates the total income and store it in sessionStorage
  let totalIncome = incomes.reduce(
    (totalIncome, income) => totalIncome + income.amount,
    0
  );
  sessionStorage.setItem("totalIncome", totalIncome);
  document.getElementById("totalIncome").innerHTML = totalIncome;
  updateDispIncome();
}

//this function lets user add new income and displays the updated income details
function addNewIncome() {
  //input vali
  let name = prompt(`Enter the name of the new Income you wish to add: `);
  while (name == "") {
    name = prompt(
      `Income name cannot be blank. Please Enter the name of the new Income you wish to add: `
    );
  }
  let amount = prompt(`Enter new income amount:`);
  while (isNaN(amount) || amount == "") {
    amount = prompt(
      "Amount can contain numbers only and cannot be empty. please re-enter amount."
    );
  }
  let recurring = prompt(
    `Is this a recurring income? Enter 1 if true or 0 for false:`
  );
  while (!(parseInt(recurring) == 1 || parseInt(recurring) == 0)) {
    recurring = prompt(
      'Invalid input for "Is this a recurring income? Enter 1 if true or 0 for false:" Please re-enter 1 or 0'
    );
  }
  recurring == 1 ? (recurring = true) : (recurring = false);
  incomes.push(new income(name, amount, recurring));
  displayIncomes();
}

//this function lets user add new Expense and displays the updated expense details
function addNewExpense() {
  //input validation for name
  let name = prompt(`Enter the name of the new Expense you wish to add: `);
  while (name == "") {
    name = prompt(
      `Expense name cannot be blank. Please Enter the name of the new Expense you wish to add: `
    );
  }
  let amount = prompt(`Enter new Expense amount:`); // input validation for amount
  while (isNaN(amount) || amount == "") {
    amount = prompt(
      "Amount can contain numbers only and cannot be empty. please re-enter amount."
    );
  }
  let recurring = prompt(
    `Is this a recurring Expense? Enter 1 if true or 0 for false:`
  );
  while (!(parseInt(recurring) == 1 || parseInt(recurring) == 0)) {
    recurring = prompt(
      'Invalid input for "Is this a recurring expense? Enter 1 if true or 0 for false:" Please re-enter 1 or 0'
    );
  }
  recurring == 1 ? (recurring = true) : (recurring = false);
  expenses.push(new expense(name, amount, recurring));
  displayExpenses();
}

//This function displays the expenses and also stores the income total in sessionStorage
function displayExpenses() {
  let ulexpense = document.getElementById("expense");
  ulexpense.innerHTML = "";
  expenses.forEach((expense) => {
    let li = document.createElement("li");
    li.innerHTML = ` ${expense.name} - ${expense.amount} - Recurring? ${expense.isRecurring} `;
    ulexpense.appendChild(li);
  });
  //calculates the total expense and store it in sessionStorage
  let total = expenses.reduce((total, expense) => total + expense.amount, 0);
  sessionStorage.setItem("totalExpense", total);
  document.getElementById("totalExpense").innerHTML = total;
  updateDispIncome();
}

//This function updates disposable income and savings using session parameters and displays it
function updateDispIncome() {
  let dispIncome =
    sessionStorage.getItem("totalIncome") -
    sessionStorage.getItem("totalExpense") -
    sessionStorage.getItem("save");
  document.getElementById("dispIncome").innerHTML = dispIncome;
  sessionStorage.setItem("dispIncome", dispIncome);
  document.getElementById("totalSavings").innerHTML =
    sessionStorage.getItem("save");
}

//this function lets user move funds from disposable income to savings.
function addToSave() {
  let dispIncome = sessionStorage.getItem("dispIncome");
  let saveNow = parseFloat(
    prompt(
      `How much of £${dispIncome} disposable income do you wish to move to Savings:`
    )
  );
  while (isNaN(saveNow) || saveNow > dispIncome) {
    saveNow = parseFloat(
      prompt(
        "Invalid input. Please enter the amount you wish to save from disposable income"
      )
    );
  }

  sessionStorage.setItem(
    "save",
    parseFloat(sessionStorage.getItem("save")) + saveNow
  );
  sessionStorage.setItem("dispIncome", dispIncome - saveNow);
  updateDispIncome();
  alert(
    `£${saveNow} to be added to Savings. Disposable income left: £${sessionStorage.getItem(
      "dispIncome"
    )}`
  );
}

//EXPENSES
class expense {
  constructor(name, amount, isRecurring) {
    this.name = name;
    this.amount = parseInt(amount);
    this.isRecurring = isRecurring;
  }
}
//initialising incomes and expenses
let salaryIncome = new income("Salary", 3000, true);
let freelanceIncome = new income("Freelance Project", 1500, false);
let rentalIncome = new income("Rental Income", 1200, true);
let investmentIncome = new income("Stock Dividends", 800, false);
let giftIncome = new income("Birthday Gift", 200, false);
let incomes = [
  salaryIncome,
  freelanceIncome,
  rentalIncome,
  investmentIncome,
  giftIncome,
];
let rentExpense = new expense("Rent", 1000, true);
let groceryExpense = new expense("Groceries", 300, true);
let entertainmentExpense = new expense("Concert Ticket", 150, false);
let utilitiesExpense = new expense("Utilities", 200, true);
let carMaintenanceExpense = new expense("Car Maintenance", 400, false);
let expenses = [
  rentExpense,
  groceryExpense,
  entertainmentExpense,
  utilitiesExpense,
  carMaintenanceExpense,
];

//adding event listeners to the buttons
displayIncomes();
document.getElementById("addNewIncome").addEventListener("click", addNewIncome);

displayExpenses();
document
  .getElementById("addNewExpense")
  .addEventListener("click", addNewExpense);

document.getElementById("addtoSave").addEventListener("click", addToSave);
