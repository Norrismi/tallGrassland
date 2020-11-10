import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";



const Gallery = ({ property }) => {
    // console.log(property.id)



    return (
        <div>
            Hello from Gallery
            <div>

            </div>
            {property && property.map((item) =>
                <div>
                    {item.title}
                    <ul>
                        {item.map((sub) =>
                            <li>
                                {sub}
                            </li>
                        )}
                    </ul>
                </div>

                // <div>
                //     {property && <img src={property.gallery} alt="Card  cap"/>}
                // </div>

            )}
        </div>
    );

}

// export default Gallery;

const mapStateToProps = (state, ownProps) => {


    return {
        property: state.firestore.ordered.properties
    };
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "properties" }])
)(Gallery);