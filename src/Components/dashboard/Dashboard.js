import React, { Component } from "react";
import ListingSummary from "../listings/listingSummary/ListingSummary";
import { connect } from "react-redux";

import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    // console.log(this.props)

    const { properties } = this.props;

    return (
   
        <div className="dashboard">
          <div className="dashboard__listings">

          <ListingSummary  properties={properties} />
          </div>


        </div>
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    properties: state.property.properties,
  };
};

export default connect(mapStateToProps)(Dashboard);
