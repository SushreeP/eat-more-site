import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import FoodItems from "./components/FoodItems";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={AboutUs}></Route>
          <Route path="/order-food" component={FoodItems}></Route>
        </Switch>
        <ContactUs />
      </div>
    </Router>
  );
}

export default App;
