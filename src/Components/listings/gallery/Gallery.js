import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import useFirestore from '../../hooks/useFirestore'



const Gallery = ({ property, propertyID }) => {



    const { docs } = useFirestore(propertyID)


    // let propertyLocation = (propertyID) => {

    //     switch(propertyID){
    //         case '2MNgJ7bJk1b0rg0oy8BJ': 
    //         return 'deer';

    //         case 'O3LwDRyQTwZHI1M66JbQ': 
    //         return 'larchwood';

    //         case 'euYnO7W4An9htBnEvFHJ':
    //             return 'brawley'

    //             default:
    //                 return null;

    //             }
    //         }

    // if(propertyID == '2MNgJ7bJk1b0rg0oy8BJ'){
    //     return 'deer';
    // } else if(propertyID == 'O3LwDRyQTwZHI1M66JbQ'){
    //     return 'larchwood';
    // }else if (propertyID == 'euYnO7W4An9htBnEvFHJ'){
    //     return 'brawley'
    // }





    return (
        <div>
            {docs && docs.map(doc => (
                <div key={doc.id}>
                    <img src={doc.url} alt='gallery of propery pictures' />
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