import {addItemToCart} from '../utility/cartUtils'

const initState = {
  cartItems: [],
};

const propertyReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":         //ListingDetail
      console.log("property cart added", action.payload);
      console.log("ADD_TO_CART",state);
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    // {
    //   ...state,
    //   listing: action.propertyID
    // };
    case "ADD_TO_CART_ERROR":
      console.log("CART_ADDED_ERROR", action.err);
      return state;




    case "REMOVE_FROM_CART":          //ListingCheckout
      console.log(state);
      console.log("REMOVE_FROM_CART", action.id);

      return {
        ...state,
        
        //cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case "REMOVE_FROM_CART_ERROR":
      console.log("REMOVE_FROM_CART_ERROR", action.err);
      return state;

    default:
      return state;
  }
};

export default propertyReducer;
