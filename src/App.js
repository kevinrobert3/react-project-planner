import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import DashBoard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/Projectdetails";
import SignIn from "./components/auth/Signin";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/Createproject";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={DashBoard}></Route>
          <Route exact path="/project/:id" component={ProjectDetails}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/create" component={CreateProject}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
