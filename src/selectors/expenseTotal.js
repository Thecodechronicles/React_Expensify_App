const expenseTotal = (visibleExpenses) => {
    return visibleExpenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0)
}

export default expenseTotal;