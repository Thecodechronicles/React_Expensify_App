import React from "react";
import { NavLink } from "react-router-dom";

const UpperComponent = () => {
  console.log("UpperComponent Running !");
  return (
    <div>
      <h1>Expensify APP !</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        DashBoard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        CreateExpense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  );
};

export default UpperComponent;
