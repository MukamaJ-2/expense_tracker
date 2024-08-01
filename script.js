let totalExpense = 0;

function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (description && amount && category) {
        const expenseItem = document.createElement('li');
        expenseItem.innerHTML = `${description} - $${amount.toFixed(2)} (${category})`;
        document.getElementById('expenses').appendChild(expenseItem);

        totalExpense += amount;
        document.getElementById('total').innerText = totalExpense.toFixed(2);

        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('category').value = 'Food';
    } else {
        alert('Please fill in all fields.');
    }
}
