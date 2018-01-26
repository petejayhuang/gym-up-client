// IMPORT LIBRARIES
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

// ROUTES
import routes from "./routes";

// COMPONENTS
import Navbar from "../components/navbar";

// STYLES
import "../assets/css/styles.css";

class App extends Component {
  componentWillMount() {
    const { cookies } = this.props;
  }
  render() {
    console.log("yum cookies!", this.props);
    return (
      <div className="App">
        <Router>
          <Switch>
            <div>
              <Navbar />
              {routes.map((route, i) => <Route key={i} {...route} />)}
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withCookies(App);
