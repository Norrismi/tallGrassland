import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";



const Gallery = ({ property }) => {
    //  console.log(property.price)



    return (
        <div>
    
            {property && property.map((property) => {
                return (
                    <div>
                        {property.title} 
                    </div>
                )

            })}
      

{/* 
            {Object.values(gallery).map((gallery)=>{
                return (

                <div key={gallery.url}>
                    {gallery.url}
                </div>
                )
            })} */}






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