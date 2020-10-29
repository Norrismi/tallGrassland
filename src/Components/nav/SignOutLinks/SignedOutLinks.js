import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <Link to="/sign_up" className="header__link p-2">
        Sign Up
      </Link>
      <Link to="/sign_in" className="header__link p-2">
       Sign In
      </Link>
    </div>
  );
};

export default SignedOutLinks;
