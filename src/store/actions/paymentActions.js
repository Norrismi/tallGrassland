

export const paymentSubmission = (purchase) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()

        firestore
            .collection('purchase')
            .add({
              purchase
            })
            .then(() => {
                dispatch({
                  type: "PAYMENT_SUBMISSION_SUCCESS",
                  //payload: { email, name, comment },
                });
              })
              .catch((err) => {
                dispatch({ type: "PAYMENT_SUBMISSION_ERROR", payload: err });
              });
    }
}

// export const createStripeToken =(card) => {
//     return new Promise((res, rej) => {
//         Stripe.setPublishableKey('STRIPE_KEY_HERE');
//         Stripe.card.createToken(card,(status, response) => {
//             if(response.error) rej(response.error);
//             else res(response.id)
//         })
//     })
// }

// export const performCheckout = (product, address, token) =>{
//     console.log(`Using token(${token}) to purchase ${product.name} for $${product.price}`);
//     //Post to a web server at this point
// }

// export const completeCheckout = (product, address, payment) => {

//     let payload = Scriptly.loadJavascript('https://js.stripe.com/v2/')
//             .then(() => (createStripeToken(payment)))
//             .then((token) => (performCheckout(product, address, token)))

//     return {
//         type: 'COMPLETE_CHECKOUT',
//         payload
//     }
// }