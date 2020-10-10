//const history = useHistory()

export const addToCart = (propertyID, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //console.log("actions", propertyID);

    const firestore = getFirestore();

    //const id_Ref = firestore.collection("cart");

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

// firestore
//   .collection("cart")
//   .add({
//     property,
//     propertyID,
//   })
//   .then(() => {
//     dispatch({ type: "ADD_TO_CART", payload: property, propertyID });
//   })
//   .catch((err) => {
//     dispatch({ type: "ADD_TO_CART_ERROR", err });
//   });

export const removeCurrentListing = (id, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //console.log("action hit!!!", id);

    const firestore = getFirestore();

    //console.log(getState);
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

export const pendingListing = (propertyID, property) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //console.log("action hit!!!", id);

    const firestore = getFirestore();
    //const propertyRef = firestore.collection("properties"); //.doc(propertyID);
    //console.log(getState);
    // const cart = getState().firebase.cart;
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
      // .then(() => {
      //   history.push("/");
      // })
      .catch((err) => {
        dispatch({ type: "MARK_PENDING_LISTING_ERROR", err });
      });
  };
};
