import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Squares
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          View Users
        </Link>
        <Link to="/user/new" className="item">
          Create Profile
        </Link>
        <Link to="/about" className="item">
          About
        </Link>
      </div>
    </div>
  );
};
