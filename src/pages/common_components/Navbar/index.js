import React, { Component } from 'react';
import LoggedInNavbar from './LoggedInNavbar';
import LoggedOutNavbar from './LoggedOutNavbar';

class Navbars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  
  }

  render() {
    return (
      <div>
        { this.state.isLoggedIn 
          ? <LoggedInNavbar />
          : <LoggedOutNavbar />
        }
      </div>
    )
  }
}

export default Navbars;