import React from "react";
import ListingSummary from "../listings/listingSummary/ListingSummary";

import { connect } from "react-redux";

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import "./Dashboard.css";

const Dashboard = ({ properties }) => {
  //  console.log(props)

  // const { properties } = props;

  return (
    <div className="dashboard">
      <div className="dashboard__listings">
        <ListingSummary properties={properties} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // const id = ownProps.match.params.id;
  //console.log(state);
  return {
    //properties: state.property.properties,
    properties: state.firestore.ordered.properties,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "properties" }])
)(Dashboard);
