// IMPORT LIBRARIES
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// ROUTES
import routes from './routes'

// COMPONENTS
import Navbar from './common_components/navbar'

// STYLES
import '../assets/css/styles.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <p>App Component</p>
            {routes.map((route, i) => <Route key={i} {...route} />)}
          </div>
        </Router>
      </div>
    )
  }
}