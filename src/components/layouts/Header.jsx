import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Header = ({appName}) => {
  return (

        <>
          <nav class="navbar bg-dark">
    <i class="fas fa-code"></i>
        <Link to="/">{appName}</Link>
        <Link to="Dashboard.html">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        </nav>
      </>

  )
}

export default Header

