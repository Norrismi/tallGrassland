import React from 'react';
import './success.css'
import greenCheck from '../../../../assets/greenCheck.png'

const success = () => {
    return (
        <div className='success'>
            <div className='success__container'>

            <img className='success__img' src={greenCheck} alt='success'/>
            <p className='success__message'>

            Your order has been submitted successfully! <br/> We will be in contact with you to close this purchase. 
            </p>
            </div>
        </div>
    );
}

export default success;
