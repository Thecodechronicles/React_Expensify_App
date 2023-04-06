import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

console.log("app is running !");

function MyComponentTwo(props) {
  const children = props.children;
  // console.log('result: ', children);
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.props.className) {
          return child;
        } else {
          return undefined;
        }
      })}
      {/* {[<div>hello !</div>, <p>Hi !</p>]} */}
    </div>
  );
}

const MyComponent = (
  <div>
    <MyComponentTwo someAttribute="abc">
      <p className="abcd">Hi !</p>
      <p>Hello !</p>
    </MyComponentTwo>
    {/* <myComponentTwo someAttribute='pqr'>
            <p>Hello !</p>
        </myComponentTwo> */}
  </div>
);

let appRoot = document.getElementById("reactApp");
// ReactDOM.render(<p>This is expensify app !</p>, appRoot);
ReactDOM.render(MyComponent, appRoot);
