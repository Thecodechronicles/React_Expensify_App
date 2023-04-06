import { createStore, combineReducers } from "redux";

console.log("app is running !");
// console.log(createStore);

const customReducer = (state = { count: 0, someReducer: 1 }, action) => {
  return state;
};

const differentReducer = (state = { count: 0, anotherReducer: 1 }, action) => {
  return state;
};

// const store = createStore(combineReducers({
//     someReducer: customReducer
// }));

const store = createStore(customReducer);

console.log(store.getState());
console.log(
  combineReducers({
    someReducer: customReducer,
    anotherReducer: differentReducer,
  })
);
