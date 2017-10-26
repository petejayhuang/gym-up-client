import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/register">Register</Link>
        <br/>
        <Link to="/admin">Admin: Users</Link>
      </div>
    )
  }
}