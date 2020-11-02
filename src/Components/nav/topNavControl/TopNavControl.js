import React from "react";

import SignedInLinks from "../SignedInLinks/SignedInLinks";
import SignedOutLinks from "../SignOutLinks/SignedOutLinks";
import { connect } from "react-redux";


const TopNavControl = (props, {auth}) => {
  // console.log(props)


  // const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return(


    <div>
      {/* {auth.isLoaded && links} */}
    </div>


  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  };
};

export default connect(mapStateToProps)(TopNavControl);


