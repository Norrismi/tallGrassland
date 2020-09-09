import { useHistory as history } from "react-router-dom";

export const addToCart = (propertyID, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //console.log("actions", propertyID);

    const firestore = getFirestore();

    firestore
      .collection("cart")
      .add({
        propertyID,
        property,
      })
      .then(() => {
        dispatch({ type: "ADD_TO_CART", propertyID });
      })
      .catch((err) => {
        dispatch({ type: "ADD_TO_CART_ERROR", err });
      });
  };
};

//removeListing

export const deleteListing = (propertyID, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("actions hit!!!", propertyID);

    const firestore = getFirestore();

    firestore
      .collection("cart")
      .doc(propertyID)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_LISTING", propertyID });
      })
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        dispatch({ type: "DELETE_LISTING_ERROR", err });
      });
  };
};
