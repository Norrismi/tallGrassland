import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteListing } from "../../../store/actions/propertyActions";

import "./listingCheckout.css";
import pic from "../../../assets/30506238000.jpg";

const ListingCheckout = (props) => {
  const { cart } = props;


  console.log(props);

  const handleDelete = (props) => {
    console.log(props);

    deleteListing(props);
  };

  return (
    <div>
      {cart &&
        cart.map((listing) => {
          return (
            <div key={listing.propertyID}>
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
                  </div>
                  <button
                    onClick={() => handleDelete(listing.propertyID)}
                    type="button"
                    className="btn btn-light mt-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     id: state.firestore.ordered.cart,
//   };
// };

const mapDispatchToProps = (dispatch, props) => ({
  handleDelete: (props) => dispatch(deleteListing(props)),
});

export default compose(
  connect(
    //mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "cart" }])
)(ListingCheckout);

//export default connect(mapStateToProps)(ListingCheckout);
