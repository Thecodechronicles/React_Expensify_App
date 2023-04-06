import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import * as actionExpenses from "../actions/expenses"; // Redux Dev Tools configurations
import * as actionFilters from "../actions/filters"; // Redux Dev Tools configurations

const actionCreators = { ...actionExpenses, ...actionFilters } // Redux Dev Tools configurations

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, actionCreators }) // Redux Dev Tools configurations
  );

  return store;
};
