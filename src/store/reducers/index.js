import authReducer from "./authReducer";
import propertyReducer from "./propertyReducer";
import submissionReducer from './submissionReducer'
import paymentReducer from './paymentReducer'
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    property: propertyReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    submission: submissionReducer,
    payment: paymentReducer
})


export default rootReducer 