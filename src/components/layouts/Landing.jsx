import React, { Component } from "react";
//import : here it has to import a class / function from the provided location / library.
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <> <section class="landing "> 
    <div class="dark-overlay">
        <div class="landing-inner">
<h1 class="large">Developer Connector</h1>
<h4 >Create a developer profile/portfolio, share posts and get help from other developers</h4>

<div>
    <Link to="/login" class="btn-primary">Login</Link>
    <Link to="/register" class="btn-primary btn-light">Register</Link>
</div>
</div>
</div>
</section></>
  )
}

export default Landing


// export : to use it as public
// default : will use the same name
// class : keyword to define the class
// Landing : name of the class i.e. Name of the component

// extends : will use it for inheritance
// Component : name of the base class/ parent class
// render method/ function : this method is used to render/display the content to the browser
// return st. from render mehtod will hold the complete rendering content under the fragment (<></>)
// fragment (<></>) : its coming from react to hold the rendering content/ displaying content to the browser
// instead of fragment we can use div to hold the content but in recent versions of react like 17 or 18 fragment is recommended to hold the content which needs to be rendered.
