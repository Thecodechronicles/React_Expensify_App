import React from "react";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpenseList from "./ExpenseList";


const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseListFilter description="ExpenseListFilter_Props" />
    <ExpenseList description="ExpenseList_Props" />
  </div>
);

export default ExpenseDashboardPage;
