const initState = {
  error: null,
};

const paymentReducer = (state = initState, action) => {

  switch (action.type) {
    case "PAYMENT_SUBMISSION_SUCCESS":
      console.log("PAYMENT_SUBMISSION_SUCCESS");
      return {
        ...state,
        error: null,
      };
    case "PAYMENT_SUBMISSION_ERROR":
      console.log("PAYMENT_SUBMISSION_ERROR");
      return {
        ...state,
        error: state.error,
      };

    default:
      return state;
  }
};

export default paymentReducer;
