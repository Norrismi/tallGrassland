const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      console.log("Signup Success!!!");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("Signup Success!!!");
      return {
        ...state,
        authError: action.err.message,
      };
    case "SIGNIN_SUCCESS":
      console.log("Signin Success!!!");
      return {
        ...state,
        authError: null,
      };
    case "SIGNIN_ERROR":
      console.log("Signin Error!!!");
      return {
        ...state,
        authError: null,
      };

      case "SIGNOUT_SUCCESS":
        console.log("Signout Success!!!");
        return {
          ...state,
        };


    default:
      return state;
  }
};

export default authReducer;
