"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("normalize.css/normalize.css");

require("./styles/styles.scss");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

console.log("app is running !");

function MyComponentTwo(props) {
  var children = props.children;
  // console.log('result: ', children);
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.Children.map(children, function (child) {
      if (child.props.className) {
        return child;
      } else {
        return undefined;
      }
    })
  );
}

var MyComponent = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    MyComponentTwo,
    { someAttribute: "abc" },
    _react2.default.createElement("p", { className: "abcd" }, "Hi !"),
    _react2.default.createElement("p", null, "Hello !")
  )
);

var appRoot = document.getElementById("reactApp");
// ReactDOM.render(<p>This is expensify app !</p>, appRoot);
_reactDom2.default.render(MyComponent, appRoot);
