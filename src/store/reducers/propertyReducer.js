const initState = {
cartItems: []

};

const propertyReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("property cart added",  action.propertyID);
      return state
      
      // {
      //   ...state,
      //   listing: action.propertyID
      // };
    case "ADD_TO_CART_ERROR":
      console.log("CART_ADDED_ERROR", action.err);
      return state;



      
      case "REMOVE_FROM_CART":
        console.log(state.cartItems)
      console.log("REMOVE_FROM_CART", action.idd)
        //let cart = state.firestore.ordered.cart.propertyID

    // let index = state.cart.findIndex((item) => item.idd === action.idd)
    // state.cart.splice(index, 1)


      return{
        ...state,
   
      }

    case "REMOVE_FROM_CART_ERROR":
      console.log("REMOVE_FROM_CART_ERROR", action.err)
      return state;

    default:
      return state;
  }
};

export default propertyReducer;
