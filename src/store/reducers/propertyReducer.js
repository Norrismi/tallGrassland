const initState = {};

const propertyReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("property cart added", action.propertyID);
      return state;
    case "ADD_TO_CART_ERROR":
      console.log("CART_ADDED_ERROR", action.err);
      return state;

    default:
      return state;
  }
};

export default propertyReducer;
