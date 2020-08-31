import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from './Components/dashboard/Dashboard'
import Header from './Components/nav/Header'
import CheckOut from './Components/checkout/Checkout'



function App() {
  return (
    <Router>
   <Header/>
      <Switch>
      <Route path={'/checkout'} component={CheckOut} />
        <Route path={'/'} component={dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
