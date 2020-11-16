import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import useFirestore from '../../hooks/useFirestore'
import './gallery.css'



const Gallery = ({ propertyID, setSelectedImg }) => {



    const { docs } = useFirestore(propertyID)


    return (


        <div className='gallery'>
            {docs && docs.map(doc => (
                <div key={doc.id} className='gallery__img-container'
                onClick={() => setSelectedImg(doc.url)}
                >

                    <img src={doc.url} className='gallery__img' alt='gallery of propery pictures' 
                    
                    />

                </div>
            ))}
        </div>

    );

}

// export default Gallery;

const mapStateToProps = (state) => {


    return {
        property: state.firestore.ordered.properties
    };
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "properties" }])
)(Gallery);