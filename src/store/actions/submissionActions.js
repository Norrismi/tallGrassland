export const userCommentOne = (Form_One) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    //console.log('comment action reached', name, email, comment)

    firestore
      .collection("submissions")
      .add({
        Form_One,
      })
      .then(() => {
        dispatch({
          type: "SUBMISSION_ONE_SUCCESS",
          //payload: { email, name, comment },
        });
      })
      .catch((err) => {
        dispatch({ type: "SUBMISSION_ONE_ERROR", payload: err });
      });
  };
};



export const userCommentTwo = (Form_Two) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    //console.log('comment action reached', name, email, comment)

    firestore
      .collection("submissions")
      .add({
        Form_Two,
      })
      .then(() => {
        dispatch({
          type: "SUBMISSION_TWO_SUCCESS",
          //payload: { email, name, comment },
        });
      })
      .catch((err) => {
        dispatch({ type: "SUBMISSION_TWO_ERROR", payload: err });
      });
  };
};


