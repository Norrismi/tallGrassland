import React from 'react';
import './modal.css'

const Modal = ({ selectedImg, setSelectedImg }) => {

    console.log(selectedImg)


// This component, via onClick event, selects the images and returns a larger detailed version

    const handleClick = (e) => {
        if (e.target.classList.contains('modal__backdrop')) {
            setSelectedImg(null)

        }
    }


    return (
        <div className='modal__backdrop' onClick={handleClick}>
            <img src={selectedImg} alt='detailed view' />
        </div>
    );
}

export default Modal;
