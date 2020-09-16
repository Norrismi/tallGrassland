const initState = {
   authError: null,
};

const submissionReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUBMISSION_TWO_SUCCESS":
      console.log("SUBMISSION_TWO_SUCCESS!!!");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("SUBMISSION_TWO_ERROR!!!");
      return {
        ...state,
        authError: action.err.message,
      };

    default:
      return state;
  }
};

export default submissionReducer;
