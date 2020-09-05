// This is the component that will be visited after the user clicks "see more"

import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import "./listingDetails.css";

const ListingDetails = (props) => {
  const { property } = props;

  // console.log(props);

  if (property) {
    return (
      <div className="details">
        <div className="card details__card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong className="details__title">
                {property.title}
              </strong>
              <div className="details__description text-muted">
                {property.description}
              </div>
            </li>

            <li className="list-group-item details__price">
              <strong className="details__price-options">
                Payment Options
              </strong>


              <div className="details__cashTitle">
                Cash Price
              </div>

              <div className="details__container-price">

                <div className="details__price">
                    {property.price}
                </div>
                <div className="details__strike-price">
                    {property.strikePrice}
                </div>
                <div className="details__button">

</div>
              </div>
             
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div className="ListingDetails__loading">Loading...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const properties = state.firestore.data.properties;
  const propertyId = properties ? properties[id] : null;
  return {
    property: propertyId,
    id: id,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "properties" }])
)(ListingDetails);
