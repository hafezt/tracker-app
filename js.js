document.addEventListener('DOMContentLoaded', function () {
    loadExpenses();
});

function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = document.getElementById('expenseAmount').value;

    if (expenseName && expenseAmount) {
        const expense = {
            name: expenseName,
            amount: parseFloat(expenseAmount),
        };

        saveExpense(expense);
        loadExpenses();
        clearForm();
    }
}

function saveExpense(expense) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function loadExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    expenses.forEach((expense) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);
    });
}

function clearForm() {
    document.getElementById('expenseForm').reset();
}
