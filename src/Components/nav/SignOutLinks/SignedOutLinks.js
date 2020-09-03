import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <Link to="/signup" className="header__link p-2">
        Sign up
      </Link>
      <Link to="/signin" className="header__link p-2">
       Sign in
      </Link>
    </div>
  );
};

export default SignedOutLinks;
