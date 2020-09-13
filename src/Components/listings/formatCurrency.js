import CurrencyFormat from "react-currency-format";

import React from "react";

const formatCurrency = (props) => {
  console.log(props);

  return (
    <div>
      <CurrencyFormat
        renderText={(value) => <div>${value}</div>}
        value={props.strikePrice}
        displayType={"text"}
        thousandSeparator={true}
      />
    </div>
  );
};

export default formatCurrency;
