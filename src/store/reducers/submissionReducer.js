const initState = {
  error: null,
};

const submissionReducer = (state = initState, action) => {
  //console.log(action.err)

  switch (action.type) {
    case "SUBMISSION_ONE_SUCCESS":
      console.log("SUBMISSION_ONE_SUCCESS!!!");
      return {
        ...state,
        error: null,
      };
    case "SUBMISSION_ONE_ERROR":
      console.log("SUBMISSION_ONE_ERROR!!!");
      return {
        ...state,
        error: action.err
      };
    case "SUBMISSION_TWO_SUCCESS":
      console.log("SUBMISSION_TWO_SUCCESS!!!");
      return {
        ...state,
        error: null,
      };
    case "SUBMISSION_TWO_ERROR":
      console.log("SUBMISSION_TWO_ERROR!!!");
      return {
        ...state,
        error: action.err.message,
      };

    default:
      return state;
  }
};

export default submissionReducer;
