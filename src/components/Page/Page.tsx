import React from "react";
import MyNavBar from "../MyNavbar/MyNavbar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Page = () => {
  return (
    <React.Component>
      <MyNavBar />
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/users">
              <h1>Users</h1>
            </Route>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Component>
  );
};
export default Page;
