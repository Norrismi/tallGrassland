import React from "react";
import './SignedInLinks.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { signOut } from "../../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


const SignedInLinks = (props, { users, uid}) => {
  // console.log(props.users);
  console.log(props);


  const {cart} = props

  const history = useHistory();

  // if (!props.auth.uid) {
  //   return history.push("/signin");
  // }

  // const handleLogout = () => {
  //   props.signOut();
  //   return <Redirect to="/" />
  // };

  return (


    <div className="signed_in_links d-flex flex-row ">
        <li className="mr-5" ><Link to='/'> Hello, MN</Link></li>
        <li className="mr-2" ><Link  to='/sign_out' onClick={props.signOut}> Log Out</Link></li>
     

     <Link to={'/checkout'}>
              <li className="header__link mr-2">
              <div className="header__checkout__number">{(cart?.length)}</div>
                <FaShoppingCart />
              </li>
            </Link>
   

    </div>


    // <div className="signed_in_links d-flex flex-row ">

    //   {props.users &&
    //     props.users.map((user) => {
    //       return (
    //         <li key={user.id} className="user text-light p-2 mr-5">
            
    //          Hello, {user.email}
    //         </li>
    //       );
    //     })}

    //   <Link to="/sign_out">
    //     <li
    //       className="header__link p-2"
    //       onClick={() => {
    //         handleLogout();
    //       }}
    //     >
    //       Sign Out
    //     </li>
    //   </Link>
    // </div>
  );
};

const mapStateToProps = (state) => {
  //const users = state.firestore.data.users;

  return {
    // uid: state.firebase.auth.uid,
    users: state.firestore.ordered.users,
    cart: state.firestore.ordered.cart,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};

//export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "users" }])
)(SignedInLinks);
