import React from "react";
import { Link } from "react-router-dom";

const UpperComponent = () => {
  console.log("UpperComponent Running !");
  return (
    <div className="header">
      <div className="content-container">
        <div className="header-content">
          <Link to="/" className="header__title">
            <h1>Expensify</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpperComponent;
