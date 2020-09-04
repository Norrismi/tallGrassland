import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import { useHistory } from "react-router-dom";


const SignedInLinks = (props) => {
  // console.log(props)

  // const { uid } = props;
  const history = useHistory();

  // if (!props.auth.uid) {
  //   return history.push("/signin");
  // }

  const handleLogout = () => {
    // props.signOut();
    history.push("/signin");

  
  };

  return (
    <div className="signed_in_links ">
      <Link to="/logout">
        <li
          className="header__link p-2"
          onClick={() => {
            props.signOut();
           handleLogout();

          //  return <Redirect to='/signin'/>
          }}
        >
          Log out
        </li>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    //  auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
