// This is the component that will be visited after the user clicks "see more"

import React from "react";

const ListingDetails = (props) => {
const id = props.match.params.id


  return (
    <div className="details">
      <h1>{id}</h1>
      {/* two column */}

      {/* picture carosel  */}

      {/* catchy title  */}
      {/* payment options and price  */}
      {/* special payment notes  */}
      {/* description  */}
      {/* property info state county etc..  */}
      {/* property features well, roads etc..  */}
      {/* Google map  */}
      {/* Description process  */}
    </div>
  );
};

export default ListingDetails;
