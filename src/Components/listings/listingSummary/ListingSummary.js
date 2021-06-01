import React from "react";
import "./ListingSummary.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import HowItWorks from '../../dashboard/how_it_works/HowItWorks'
import About from '../../dashboard/about/About'

const ListingSummary = ({ properties }) => {


  return (
    <div className="ListingSummary__container">
      {properties &&
        properties.map((property) => {
          return (
            <div key={property.id} className="ListingSummary">
              <div className="ListingSummary__info">


                <div className="ListingSummary__pending-container">
                  <div className="ListingSummary_image">

                    {property.pic && <img
                      className="ListingSummary_image"
                      src={property.pic}
                      alt="Card  cap"
                    >

                    </img>}
                  </div>


                  {property.pending && (
                    <div className="ListingSummary__pending " alt="pending">
                      Pending
                    </div>
                  )}

                  {property.sold && (
                    <div className="ListingSummary__sold " alt="sold">
                      Sold
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
        <HowItWorks/>
        <About/>
    </div>
  );
};

export default ListingSummary;
