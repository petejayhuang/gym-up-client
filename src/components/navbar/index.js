import React, { Component } from "react";
import { connect } from "react-redux";
import LoggedInNavbar from "./LoggedInNavbar";
import LoggedOutNavbar from "./LoggedOutNavbar";

import styled from "styled-components";

const LoadingNavbar = styled.div`
  width: 100%;
  height: 3px;
  color: #fff;
  background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: Gradient 2s ease infinite;
  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const BlankLoadingNavbar = styled.div`
  height: 3px;
`;
class Navbars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.requesting ? <LoadingNavbar /> : <BlankLoadingNavbar />}
        {this.props.user.loggedIn ? <LoggedInNavbar /> : <LoggedOutNavbar />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    requesting: state.requesting
  };
}

export default connect(mapStateToProps, null)(Navbars);
