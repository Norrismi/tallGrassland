import React from "react";
import image from "../../../assets/05000619000.jpg";
import "./ListingSummary.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

// import FormatCurrency from '../formatCurrency'

const ListingSummary = ({ properties }) => {
  console.log(properties);

  return (
    <div className="ListingSummary__container">
      {properties &&
        properties.map((property) => {
          return (
            <div key={property.id} className="ListingSummary">
              <div className="ListingSummary__info">
                <div className="ListingSummary__pending-container">
                {property.pic && <img 
                    className="ListingSummary_image"
                    src={property.pic}  ///////////////
                    alt="Card  cap"
                >
                
                </img>}


                  {/* <img
                    className="ListingSummary_image"
                    src={image}
                    alt="Card  cap"
                  ></img> */}


                    {/* {console.log(property)}
                  {property.url && <img src={property.pic} alt="pic"></img>} */}

                  {property.pending && (
                    <div className="ListingSummary__pending " alt="pending">
                      Pending
                    </div>
                  )}


                </div>
                <div className="card-body">
                  <Link
                    className="ListingSummary_title-link"
                    to={"/property/" + property.id}
                  >
                    <h5 className="ListingSummary__title">{property.title}</h5>
                  </Link>
                  <div className="ListingSummary__description text-muted">
                    {property.description}
                  </div>

                  <div className="price__container">
                    <span className="ListingSummary__price__strike">
                      {/* ${(property.price+100 + Math.random()*100).toFixed(2)} */}

                      {/* <FormatCurrency property={property}/> */}

                      <CurrencyFormat
                        renderText={(value) => <div>${value}</div>}
                        value={property.strikePrice
                        
                        }
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </span>
                    <strong className="ListingSummary__price">
                      {" "}
                      ${property.price}
                    </strong>
                  </div>

                  <div className="card-footer ListingSummary__card-footer">
                    <div className="ListingSummary__acreage ">
                      <small className="text-muted ListingSummary__acreage-footer ">
                        Acres
                      </small>
                      <strong className="text-muted ListingSummary__acreage-footer ">
                        {property.acreage}
                      </strong>
                    </div>

                    <div className="ListingSummary__location ">
                      <small className="text-muted ListingSummary__location-footer">
                        County
                      </small>
                      <strong className="text-muted ListingSummary__location-footer">
                        {property.county}
                      </strong>
                    </div>
                    <Link
                      className="btn btn-primary ListingSummary__btn"
                      to={"/property/" + property.id}
                    >
                      View
                    </Link>
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
