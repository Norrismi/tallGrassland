import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import useFirestore from '../../hooks/useFirestore'
import './gallery.css'



const Gallery = ({ propertyID, setSelectedImg }) => {

    // This component maps over images and returns specific property urls

                                    //Example of propertyID: 2MNgJ7bJk1b0rg0oy8BJ
    const { docs } = useFirestore(propertyID)
    console.log(docs)

    return (

        <div className='gallery'>
            {docs && docs.map(doc => (

                <div key={doc.url} className='gallery__img-container'
                    onClick={() => setSelectedImg(doc.url)}>

                    <img src={doc.url} className='gallery__img' alt='gallery of propery pictures' />
                </div>
            ))}
        </div>
    );
}


const mapStateToProps = (state) => {


    return {
        property: state.firestore.ordered.properties
    };
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "properties" }])
)(Gallery);