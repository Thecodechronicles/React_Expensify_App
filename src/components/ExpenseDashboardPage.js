import React from "react";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpenseList from "./ExpenseList";
import RandomComp from "./RandomComp";

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseListFilter description="ExpenseListFilter_Props" />
    <ExpenseList description="ExpenseList_Props" />
    {/* <RandomComp description='randomComponent' /> */}
  </div>
);

export default ExpenseDashboardPage;
