// Import Libraries
import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { logOut } from "../../actions";

// Import Components
import { Link } from "react-router-dom";

// Import Styles
import styled from "styled-components";
import appStyles from "../../assets/css/appStyles";

// Styles
const Nav = styled.section`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${appStyles.colors.grey};
  padding: 0;
  margin: 0;
  height: 50px;
  box-shadow: 2px 2px 5px ${appStyles.colors.grey};
`;
// Left half of navbar
const Brand = styled.div`
  width: 50%;
`;
const HomeNavLink = styled(Link)`
  color: ${appStyles.colors.primary};
  font-size: 20px;
  font-weight: 600;
  padding-left: 10px;
  text-decoration: none;
`;
// Right half of navbar
const Links = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const NavLinks = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  color: ${appStyles.colors.text};
`;
const NavLink = styled(Link)`
  list-style: none;
  padding-right: 10px;
  text-decoration: none;
  color: ${appStyles.colors.primary};
`;
const PrimaryNavLink = styled(Link)`
  list-style: none;
  padding-right: 10px;
  color: ${appStyles.colors.primary};
  font-weight: 400;
  text-decoration: none;
`;

// Component
class LoggedInNavbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logOut();
  }

  render() {
    return (
      <Nav>
        <Brand>
          <HomeNavLink to="/">GymApp</HomeNavLink>
        </Brand>
        <Links>
          <NavLinks>
            <NavLink to="/create">Create Session</NavLink>
            <NavLink to="/analytics">Analytics</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink onClick={this.handleLogout} to="/logout">
              Log out
            </NavLink>
          </NavLinks>
        </Links>
      </Nav>
    );
  }
}

export default connect(null, { logOut })(LoggedInNavbar);
