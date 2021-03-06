import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from "./Components/dashboard/Dashboard";
import Header from "./Components/nav/Header/Header";
import CheckOut from "./Components/checkout/Checkout";
import ListingDetails from "./Components/listings/listingDetails/ListingDetails";
import PhotoUpload from './Components/listings/photoUpload/PhotoUpload'
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import SignOut from './Components/auth/SignOut'
import Success from './Components/checkout/checkoutMessage/success'
import FAQ from './Components/faq/FAQ'
import "font-awesome/css/font-awesome.min.css";
import Footer from "./Components/nav/Footer/Footer";
import NotFound from './Components/nav/NotFound/NotFound'





function App() {

  return (
    <Router>
      <Header />
      <Switch>

        <Route path={"/faq"} component={FAQ} />
        <Route path={"/sign_up"} component={SignUp} />
        <Route path={"/sign_in"} component={SignIn} />
        <Route path={"/sign_out"} component={SignOut} />
        <Route path={"/upload"} component={PhotoUpload} />
        <Route path={"/success"} component={Success} />
        <Route path={"/property/:id"} component={ListingDetails} />
        <Route exact path={"/"} component={dashboard} />
        <Route path={"/checkout"} component={CheckOut} />
        <Route path="*" component={NotFound} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
