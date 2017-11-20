// Import Libraries
import React, { Component } from 'react';

// Import Components
import { Link } from 'react-router-dom';

// Import Styles
import styled from 'styled-components';
import appStyles from "../../../assets/css/appStyles"

// Styles
const Nav = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 3px solid ${appStyles.colors.primary};
  border-bottom: 1px solid ${appStyles.colors.grey};
  padding: 0;
  margin: 0;
  height: 50px;
`
// Left half of navbar
const Brand = styled.div`
  width: 50%;
`
const HomeNavLink = styled(Link)`
  color: ${appStyles.colors.primary};
  font-size: 20px;
  font-weight: 600;
  padding-left: 10px;
  text-decoration: none;
`
// Right half of navbar
const Links = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const NavLinks = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  color: ${appStyles.colors.text};
`

const NavLink = styled(Link) `
  list-style: none;
  padding-right: 10px;
  text-decoration: none;
  color: ${appStyles.colors.primary}l
`
const PrimaryNavLink = styled(Link) `
  list-style: none;
  padding-right: 10px;
  color: ${appStyles.colors.primary};
  font-weight: 400;
  text-decoration: none;
`

// Component
class LoggedOutNavbar extends Component {
  render() {
    return (
      <Nav>
        <Brand><HomeNavLink to="/">GymApp</HomeNavLink></Brand>
        <Links>
          <NavLinks>
            <NavLink to="/login">Login</NavLink>
            <PrimaryNavLink to="/register">Sign Up</PrimaryNavLink>
          </NavLinks>

        </Links >
      </Nav >
    )
  }
}

export default LoggedOutNavbar;