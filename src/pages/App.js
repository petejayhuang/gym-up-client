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
import Navbar from '../components/navbar'

// STYLES
import '../assets/css/styles.css';

export default class App extends Component {
  render() {
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
    )
  }
}