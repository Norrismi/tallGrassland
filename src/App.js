import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from "./Components/dashboard/Dashboard";
import Header from "./Components/nav/Header/Header";
import CheckOut from "./Components/checkout/Checkout";
//import Logout from './Components/nav/SignedInLinks/SignedInLinks'
import ListingDetails from "./Components/listings/listingDetails/ListingDetails";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
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
        {/* <Route path={"/logout"} component={Logout} /> */}
        <Route path={"/signup"} component={SignUp} />
        <Route path={"/signin"} component={SignIn} />
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
