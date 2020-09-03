//provides all property details so it can be mapped

import React from "react";
import image from "../../../assets/05000619000.jpg";
import './ListingSummary.css'

const ListingSummary = ({ properties }) => {
  // console.log(properties);
  return (
    <div className="ListingSummary__container">
      {properties &&
        properties.map((property) => {

          return (
            // come back and change key!!!
            <div key={property.title} className="ListingSummary">  
              <div className="ListingSummary__info">
                <img className="ListingSummary_image" src={image} alt="Card  cap" />
                <div className="card-body">
                  <h5 className="ListingSummary__title">
                  {property.title}
                  </h5>
                  <div className="ListingSummary__description text-muted">
                  {property.description}
                  </div>

                  <div className="price__container">
                    <span className="ListingSummary__price__strike">
                      {/* ${(price + 10).toFixed(2)} */}
                      {property.priceStrike}
                   
                    </span>
                    <strong className="ListingSummary__price">  {property.price}</strong>
                  </div>

                  <div className="card-footer ListingSummary__card-footer">
                    <div className="ListingSummary__acreage ">
                      <small className="text-muted ListingSummary__acreage-footer ">
                        Acres
                      </small>
                      <strong className="text-muted ListingSummary__acreage-footer ">
                      {property.acres}
                      </strong>
                    </div>

                    <div className="ListingSummary__location ">
                      <small className="text-muted ListingSummary__location-footer">
                        City
                      </small>
                      <strong className="text-muted ListingSummary__location-footer">
                      {property.city}
                      </strong>
                    </div>
                    <button
                      className="btn btn-primary ListingSummary__btn"
                      // onClick={addToBasket}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ListingSummary;
