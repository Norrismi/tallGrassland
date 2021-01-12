import React from "react";
import ListingSummary from "../listings/listingSummary/ListingSummary";
import { connect } from "react-redux";
import FormOne from '../contactForm/contactFormOne/FormOne'
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";


import "./Dashboard.css";

const Dashboard = ({ properties }) => {

  return (
    <div className="dashboard">
      <FormOne/>
      <div className="dashboard__listings">
        <ListingSummary properties={properties} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {

  return {
    properties: state.firestore.ordered.properties,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "properties" }])
)(Dashboard);
