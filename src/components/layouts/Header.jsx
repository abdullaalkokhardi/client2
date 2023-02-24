import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <>
          <nav class="navbar bg-dark">
    <i class="fas fa-code"></i>
        <Link to="/">DevConnector</Link>
        <Link to="Dashboard.html">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        </nav>
      </>
    )
  }
}
