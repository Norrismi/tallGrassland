import { useHistory } from "react-router-dom";

//const history = useHistory()

export const addToCart = (propertyID, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //console.log("actions", propertyID);

    const firestore = getFirestore();

    firestore
      .collection("cart")
      .add({
        //propertyID,
        property,
      })
      .then(() => {
        dispatch({ type: "ADD_TO_CART", payload: property });
      })
      .catch((err) => {
        dispatch({ type: "ADD_TO_CART_ERROR", err });
      });
  };
};

//removeListing

export const deleteCurrentListing = (id, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("action hit!!!", id);

    const firestore = getFirestore();
    console.log(getState);
    // const cart = getState().firebase.cart;

    firestore
      .collection("cart")
      .doc(id)
      .delete() 
      .then(() => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
      })
      // .then(() => {
      //   history.push("/");
      // })
      .catch((err) => {
        dispatch({ type: "REMOVE_FROM_CART_ERROR", err });
      });
  };
};
