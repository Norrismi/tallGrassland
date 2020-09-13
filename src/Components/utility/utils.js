import CurrencyFormat from "react-currency-format";


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


//   export const formatCurrency = () => {



//   <CurrencyFormat
//   renderText={(value) => <div>${value}</div> }
//   value={property.strikePrice.toFixed(2)}
//   displayType={"text"}
//   thousandSeparator={true}


//   }
