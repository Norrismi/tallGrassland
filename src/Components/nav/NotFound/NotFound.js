import React from 'react';
import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
    return (
        <div className='notfound__container'>
            <h1 className='notfound__title'>
                404: Page Not Found<br />
            </h1>
            <div className="notfound__btn-container">
                <Link className="btn btn-primary notfound__btn"
                    to={"/"}>See All Properties Here
                </Link>

            </div>
        </div>
    );
}

export default NotFound;
