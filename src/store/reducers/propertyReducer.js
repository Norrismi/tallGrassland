import { addItemToCart } from "../utility/cartUtils";

const initState = {
  cartItems: [],
};

const propertyReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": //ListingDetail
      console.log("property cart added", action.payload);
      console.log("ADD_TO_CART", state);
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case "ADD_TO_CART_ERROR":
      console.log("CART_ADDED_ERROR", action.err);
      return state;

    case "REMOVE_FROM_CART": //ListingCheckout
      console.log("REMOVE_FROM_CART", action.payload);

      return {
        ...state,
      };
    case "REMOVE_FROM_CART_ERROR":
      console.log("REMOVE_FROM_CART_ERROR", action.err);
      return state;

    default:
      return state;
  }
};

export default propertyReducer;
