import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu from "./Menu";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Services from "./Navbar/Services";
import User from "./Navbar/User";
import Contact from "./Navbar/Contact";
import MainForm from "./Navbar/Signupasatutor/MainForm";
import SignupstudentMain from "./Navbar/Signupasastudent/SignupstudentMain";
import Signin from "./Navbar/Signin";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/user" component={User} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/mainform" component={MainForm} />
        <Route exact path="/SignupstudentMain" component={SignupstudentMain} />
        <Route exact path="/Signin" component={Signin} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
