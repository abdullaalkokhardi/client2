import React, { Component } from 'react'


const Footer = ({appName}) => {
  return (
    <>
    <footer> 
&copy; &trade; www.{appName}.com {new Date().getFullYear()}
</footer>
  </>
  )
}

export default Footer


