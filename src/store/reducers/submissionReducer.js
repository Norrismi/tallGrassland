const initState = {
  authError: null,
};

const submissionReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUBMISSION_ONE_SUCCESS":
      console.log("SUBMISSION_ONE_SUCCESS!!!");
      return {
        ...state,
        authError: null,
      };
    case "SUBMISSION_ONE_ERROR":
      console.log("SUBMISSION_ONE_ERROR!!!");
      return {
        ...state,
        authError: action.err.message,
      };
    case "SUBMISSION_TWO_SUCCESS":
      console.log("SUBMISSION_TWO_SUCCESS!!!");
      return {
        ...state,
        authError: null,
      };
    case "SUBMISSION_TWO_ERROR":
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
