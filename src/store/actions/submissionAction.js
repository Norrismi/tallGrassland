export const userCommentTwo = (Form_Two) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    //console.log('comment action reached', name, email, comment)

    firestore
      .collection("submissions")
      .add({
        Form_Two
      })
      .then(() => {
        dispatch({
          type: "SUBMISSION_TWO_SUCCESS",
          //payload: { email, name, comment },
        });
      })
      .catch((err) => {
        dispatch({ type: "SUBMISSION_TWO_ERROR", err });
      });
  };
};
