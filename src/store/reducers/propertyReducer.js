import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const initState = {
  error: "",
  pending: false,
};

const propertyReducer = (state = initState, action, { cart }) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("property cart added", action.payload);
      console.log(state);

      const index = cart.findIndex((item) => item.propertyID === action.id);

      if (index >= 0) {
        state.error = "This property is alread in your cart";
      }

      return {
        ...state,
      };

    case "ADD_TO_CART_ERROR":
      console.log("CART_ADDED_ERROR", action.err);
      let error = state.error;

      return {
        ...state,
        error,
      };

    case "REMOVE_FROM_CART": 
      console.log("REMOVE_FROM_CART", action.payload);

      return {
        ...state,
      };
    case "REMOVE_FROM_CART_ERROR":
      console.log("REMOVE_FROM_CART_ERROR", action.err);
      return state;

    case "MARK_PENDING_LISTING":
      console.log("MARK_PENDING_LISTING", action.payload);

      return {
        ...state,
        error,
      };
    case "MARK_PENDING_LISTING_ERROR":
      console.log("MARK_PENDING_LISTING_ERROR", action.err);

      return {
        ...state,
        error,
      };

    default:
      return {
        ...state,
      };
  }
};


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const properties = state.firestore.data.properties;
  const propertyId = properties ? properties[id] : null;

  return {
    property: propertyId,
    propertyID: id,
    cart: state.firestore.ordered.cart,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "properties" }], [{ collection: "cart" }])
)(propertyReducer);
