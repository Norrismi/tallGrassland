

export const addToCart = (propertyID, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {


    const firestore = getFirestore();



    firestore
      .collection("cart")
      .add({
        property,
        propertyID,
      })
      .then(() => {
        dispatch({ type: "ADD_TO_CART", payload: propertyID });
      })
      .catch((err) => {
        dispatch({ type: "ADD_TO_CART_ERROR", err });
      });
  };
};



export const removeCurrentListing = (id, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
 

    const firestore = getFirestore();

    firestore
      .collection("cart")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
      })

      .catch((err) => {
        dispatch({ type: "REMOVE_FROM_CART_ERROR", err });
      });
  };
};

export const pendingListing = (propertyID, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
 

    const firestore = getFirestore();

    firestore
      .collection("properties")
      .doc(propertyID)
      .set(
        {
          pending: true,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: "MARK_PENDING_LISTING", payload: true });
      })
   
      .catch((err) => {
        dispatch({ type: "MARK_PENDING_LISTING_ERROR", err });
      });
  };
};
