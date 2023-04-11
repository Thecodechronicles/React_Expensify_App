import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import UpperComponent from "../components/UpperComponent";
import RandomComp from "../components/RandomComp";

console.log("app is running good !");

const AppRoute = () => (
  <BrowserRouter>
    <div>
      <UpperComponent />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        {/* <Route path="/edit" component={HelpPage} /> */}
        <Route path="/edit:id" component={EditExpensePage} />
        {/* <Route path="/edit">
          <Route index={true} component={EditExpensePage} />
          <Route path="/abc" component={HelpPage} />
        </Route> */}
        {/* <Route
          path="/edit"
          render={({ match: { url } }) => {
            console.log('Route nested url: ', url);
            return (
              <div>
                <Route path={`${url}/`} component={EditExpensePage} exact />
                <Route path={`${url}/abc`} component={HelpPage} />
              </div>
            )
          }}
        /> */}
        {/* <Route path="/edit" component={EditExpensePage} /> */}
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoute;
