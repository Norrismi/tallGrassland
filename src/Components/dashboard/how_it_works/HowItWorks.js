import React from 'react';
import './howitworks.css'
import {
    FaTree,
    FaFileSignature,
    FaHandshake
  } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <div className='howitworks__container'>

            <h3 className='howitworks__title'>How to Purchase a Property</h3>
        <div className='howitworks__card-container'>

            <div className="howitworks__card">
                <div className="card-body howitworks__card-body">
                    <FaTree className='howitworks__icon'/>
                    <h5 className="card-title howitworks__card-title">Select a Property</h5>
                    <p className="card-text howitworks__card-text text-muted">
                        Reserve the property, and complete the checkout form to make a deposit of $$$ to reserve the parcel.
                    </p>
                </div>
            </div>

            <div className="howitworks__card">
                <div className="card-body howitworks__card-body">
                <FaFileSignature className='howitworks__icon'/>
                    <h5 className="card-title howitworks__card-title">Sign Agreement</h5>
                    <p className="card-text howitworks__card-text text-muted">
                        The land purchase agreement will be prepared for your review. Sign and return.
                    </p>
                </div>
            </div>

            <div className="howitworks__card">
                <div className="card-body howitworks__card-body">
                <FaHandshake className='howitworks__icon'/>
                    <h5 className="card-title howitworks__card-title">Close on Property</h5>
                    <p className="card-text howitworks__card-text text-muted">
                        The closing process will be conducted either in-house or through a third party like a title company to complete the land sale. 
                    </p>
                </div>
            </div>

        </div>
        </div>
    );
}

export default HowItWorks;
