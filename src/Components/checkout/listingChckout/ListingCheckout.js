import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteCurrentListing } from "../../../store/actions/propertyActions";

import "./listingCheckout.css";
import pic from "../../../assets/30506238000.jpg";

const ListingCheckout = ({ cart, deleteListing }) => {
  console.log(cart);

  return (
    <div>
      {cart &&
        cart.map((listing) => {
          return (
            <div key={listing.id}>
              <div className="list_checkout__container m-4">
                <div className="list_checkout__left-side mr-4">
                  <div className="list_checkout__picture mb-3">
                    <img src={pic} alt="" />
                  </div>
                </div>

                <div className="list_checkout__right-side">
                  <div className="list_checkout__title">
                    {listing.property.title}
                  </div>
                  <div className="list_checkout__description text-muted">
                    {listing.property.description}
                  </div>
                  <div className="list_checkout__price-btn-container mt-4">
                    <div className="list_checkout__price ">
                      ${listing.property.price}
                    </div>

                    <button type="button" className="btn btn-success">
                      Buy Now
                    </button>
                    <div
                      onClick={() => deleteListing(listing.id) }
                      type="button"
                      className="list_checkout__delete"
                    >
                      &#10005;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteListing: (id) => dispatch(deleteCurrentListing(id)),
 
});

export default compose(
  connect(null, mapDispatchToProps),
  firestoreConnect([{ collection: "cart" }])
)(ListingCheckout);
