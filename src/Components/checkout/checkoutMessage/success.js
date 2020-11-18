

//// File Moved see if still works !!!!!!!



import React from "react";
import "./success.css";
import greenCheck from "../../../../assets/greenCheck.png";

const success = () => {
  return (
    <div className="success">
      <div className="success__container">
        <div className="success__img-container">
          <img className="success__img" src={greenCheck} alt="success" />
        </div>
        <p className="success__message">
          <div>Your order has been successfully submitted!</div>
          <div>We have marked this property as pending.</div>
          <div>We will be in contact with you to close this purchase.</div>
        </p>
      </div>
    </div>
  );
};

export default success;
