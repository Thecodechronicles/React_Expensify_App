import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = (props) => (
  <div>
    404 ! <Link to="/create">Go Home</Link>
  </div>
);

export default NotFoundPage;
