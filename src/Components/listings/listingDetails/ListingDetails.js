import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import "./listingDetails.css";
import CurrencyFormat from "react-currency-format";
import { addToCart } from "../../../store/actions/propertyActions";
import FormTwo from "../../contactForm/contactFormTwo/FormTwo";
import Gallery from '../gallery/Gallery'
import { Redirect } from "react-router-dom";
import Modal from '../modal/Modal'
import ListingNotes from './listingNotes'
import ListingMap from './listingMap'
import './listingDetails.css'
import {
  FaVectorSquare,
  FaRegMap,
  FaRoad,
  FaIndustry,
  FaBolt,
  FaWater,
  FaMapMarkedAlt,
} from "react-icons/fa";


const ListingDetails = ({ property, propertyID, addToCart, cart, auth }) => {

  const [selectedImg, setSelectedImg] = useState(null)


  if (cart && cart.length) {
    return <Redirect to="/checkout" />;
  }

  if (!auth.uid) {
    return <Redirect to='/sign_in' />
  }


  if (property) {

    return (
      <>

        <Gallery setSelectedImg={setSelectedImg} propertyID={propertyID} />

        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}


        <div className="details__body">
          <div className="details__left-side">
            <div className="card details__card m-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong className="details__title">{property.title}</strong>
                  <div className="details__title-note text-muted mt-4">
                    {property.description}
                  </div>
                </li>

                <li className="list-group-item ">
                  <strong className="details__price-options">
                    Payment Options
                  </strong>
                  <div className="details__cash-title mt-3 mb-1">
                    Cash Price
                  </div>

                  <div className="details__container-price mb-2">
                    <div className="details__container-left">
                      <div className="details__price">
                        ${property.price}
                      </div>

                      <div className="details__strike-price text-muted">
                        <CurrencyFormat
                          renderText={(value) => <div>${value}</div>}
                          value={property.strikePrice}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </div>
                    </div>
                    <div className="details__container-right">
                      <div className="details__down-payment">
                        $199 Down Payment
                      </div>

                      <button
                        className="details__reserve-button"
                        // onClick={() => addToCart(propertyID, property)}
                        onClick={() => window.open(property.reserveLink)}
                      >
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </li>

                <li className="list-group-item ">
                  <div className="details__payment-notes">Payment Notes</div>
                  <p className="details__payment-notes-paragraph text-muted mt-3">
                    If you are interested in reserving this parcel, click
                    “Reserve Now” button for any of the payment options. You
                    will be redirected to our payment page to make the initial
                    reservation payment.
                  </p>
                </li>
                <li className="list-group-item ">
                  <div className="details__description">Description</div>
                  <p className="details__description-paragraph text-muted mt-3">
                    {property.largeDescription}
                  </p>
                </li>

                <li className="list-group-item ">
                  <div className=" details__info-title  ">
                    Property Information
                  </div>



                  <div className="details__info-container   ">

                    <div className=" details__info-county">
                      <FaRegMap className="fa-icon" />
                      <div className="detials__font-color ">
                        {property.county}
                      </div>
                      <strong className="details__info-label">County</strong>
                    </div>

                    <div className="details__info-acres">
                      <FaVectorSquare className="fa-icon" />
                      <div className="detials__font-color ">
                        {property.acreage}
                      </div>
                      <strong className="details__info-label">Acres</strong>
                    </div>

                    <div className="details__info-access">
                      <FaRoad className="fa-icon" />
                      <div className=" detials__font-color">{property.access}</div>
                      <strong className="details__info-label">Access</strong>
                    </div>
                    
                    <div className="details__info-cord">
                      <FaMapMarkedAlt className="fa-icon" />
                      <div className="detials__font-color details__coords ">{`${property.coords[0]}, ${property.coords[1]}`}</div>
                      <strong className="details__info-label">

                        Coordinates
                      </strong>
                    </div>

                    <div className="details__info-water">
                      <FaWater className="fa-icon" />
                      <div className="detials__font-color details__water">{property.water}</div>
                      <strong className="details__info-label">Water</strong>
                    </div>

                    <div className="details__info-power">
                      <FaBolt className="fa-icon" />
                      <div className=" detials__font-color">{property.power}</div>
                      <strong className="details__info-label">Power</strong>
                    </div>


                    <div className="details__info-zoning">
                      <FaIndustry className="fa-icon" />
                      <div className="detials__font-color ">{property.zoning}</div>
                      <strong className="details__info-label">Zoning</strong>
                    </div>





                  </div>
                </li>
              </ul>
              <ListingMap {...property.coords}/>
              <ListingNotes />
            </div>
          </div>
          <div className="details__right-side mr-4 mt-4 ">
            <FormTwo className="details__contact-form" />
          </div>
        </div>
      </>
    );
  } else {
    return <div className="ListingDetails__loading">Loading...</div>;
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (propertyID, property) =>
      dispatch(addToCart(propertyID, property)),

  };
};

const mapStateToProps = (state, ownProps) => {


  const id = ownProps.match.params.id;
  const properties = state.firestore.data.properties;
  const propertyId = properties ? properties[id] : null;

  return {
    property: propertyId,
    propertyID: id,
    cart: state.firestore.ordered.cart,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "properties" }], [{ collection: "cart" }])
)(ListingDetails);
