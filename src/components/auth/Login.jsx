import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <>
      <br />
        <section> 
    <h1 class="large text-primary">Login</h1>
<form class="form" action="xyz.html">
    <div class="form-group"> 
    <input type="text" name="username" placeholder="Username"/>
    </div>
    <div class="form-group">
    <input type="password" name="password"  placeholder="Password"/>
    </div>
    <div class="form-group">
    <input type="submit" value="Login"/>
    </div>
</form>
</section>
      </>
    )
  }
}
