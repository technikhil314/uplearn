import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavigationBar from "./components/navigationBar";
import Home from "./pages/home";
import "./components/toaster";
import Toast from "./components/toaster";
export default function App() {
  return (
    <>
      <Toast />
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
