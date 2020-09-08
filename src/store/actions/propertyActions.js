// export const create

export const addToCart = (propertyID, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
      //console.log("actions", propertyID);

    
      const firestore = getFirestore();
      
    firestore
      .collection("cart")
      .add({
        ...propertyID,
        propertyID,
        property
      })
      .then(() => {
        dispatch({ type: "ADD_TO_CART", propertyID });
      })
      .catch((err) => {
        dispatch({ type: "ADD_TO_CART_ERROR", err });
      });
  };
};

//   firestore
//   .collection("cart")
//   .doc('LA')
//   .set({
//     ...property,
//     property: property.price
//   })
