export const addItemToCart = (cartItems, cartItemToAdd) => {        //Udemy 116
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return "Item already added to cart";
  } else {
    return [...cartItems];
  }
};


