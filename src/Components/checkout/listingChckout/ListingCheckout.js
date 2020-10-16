import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { removeCurrentListing } from "../../../store/actions/propertyActions";

import "./listingCheckout.css";
//import pic from "../../../assets/30506238000.jpg";

const ListingCheckout = ({ cart, removeListing }) => {
  console.log(cart);

  return (
    <div>
      {cart &&
        cart.map((listing) => {
          return (
            <div key={listing.id}>


              <div className="list_checkout__container m-4">
          

               
                  <div className="list_checkout__title">
                    {listing.property.title}
                  </div>

        
                  <div className="list_checkout__description text-muted m-2">
                    {listing.property.description}
                  </div>

                  <div className="list_checkout__price-btn-container m-4 ">
                    <div className="list_checkout__price mr-3">
                      ${listing.property.price}
                    </div>


                    <div
                      onClick={() => removeListing(listing.id) }
                      type="button"
                      className="list_checkout__delete"
                    >
             
                      &#10005;
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
  removeListing: (id) => dispatch(removeCurrentListing(id)),
 
});

export default compose(
  connect(null, mapDispatchToProps),
  firestoreConnect([{ collection: "cart" }])
)(ListingCheckout);
