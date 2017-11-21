import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoggedInNavbar from './LoggedInNavbar'
import LoggedOutNavbar from './LoggedOutNavbar'

class Navbars extends Component {
  constructor(props) {
    super(props) 
  }

  render() {
    console.log(this.props)
    return (
      <div>
        { this.props.user.userId
          ? <LoggedInNavbar />
          : <LoggedOutNavbar />
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Navbars)