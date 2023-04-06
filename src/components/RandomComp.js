import React from "react";
import { connect } from "react-redux";

const RandomComp = (props) => (
  <div>
    <h1>Hi ! This is some random comonent !!</h1>
  </div>
);

export default connect((state) => ({
  expenses: "random expenses",
}))(RandomComp);
