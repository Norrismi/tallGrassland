import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from "./Components/dashboard/Dashboard";
import Header from "./Components/nav/Header/Header";
import CheckOut from "./Components/checkout/Checkout";
//import Sign_out from './Components/nav/SignedInLinks/SignedInLinks'
import ListingDetails from "./Components/listings/listingDetails/ListingDetails";
// import PhotoUpload from './Components/listings/photoUpload/PhotoUpload'
// import imageGrid from './Components/listings/photoUpload/imageGrid/imageGrid'
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import Success from './Components/checkout/checkoutMessage/success/success'
import "font-awesome/css/font-awesome.min.css";
import Footer from "./Components/nav/Footer/Footer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_JGPju7lamDwFKbqHzTgS7VJF004NgvW8xK");

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path={"/sign_out"} component={Sign_out} /> */}
        <Route path={"/sign_up"} component={SignUp} />
        <Route path={"/sign_in"} component={SignIn} />
        {/* <Route path={"/upload"} component={PhotoUpload} /> */}
        {/* <Route path={"/images"} component={imageGrid} /> */}
        <Route path={"/success"} component={Success} />
        <Route path={"/property/:id"} component={ListingDetails} />
        <Route exact path={"/"} component={dashboard} />
        <Elements stripe={stripePromise}>
          <Route path={"/checkout"} component={CheckOut} />
        </Elements>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
