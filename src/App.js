import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from "./Components/dashboard/Dashboard";
import Header from './Components/nav/Header/Header';
import CheckOut from "./Components/checkout/Checkout";
import ListingDetails from "./Components/listings/listingDetails/ListingDetails";
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'
import Logout from './Components/nav/SignedInLinks/SignedInLinks'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      {/* <Route path={"/logout"} component={Logout} /> */}
      <Route path={"/signup"} component={SignUp} />
        <Route path={"/signin"} component={SignIn} />
        <Route path={"/listing/:id"} component={ListingDetails} />
        {/* <Route path={"/checkout"} component={CheckOut} /> */}
        <Route exact path={"/"} component={dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
