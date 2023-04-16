import React from "react";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpenseList from "./ExpenseList";
import ExpenseSumComp from "./ExpenseSum";


const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseSumComp />
    <ExpenseListFilter description="ExpenseListFilter_Props" />
    <ExpenseList description="ExpenseList_Props" />
  </div>
);

export default ExpenseDashboardPage;
