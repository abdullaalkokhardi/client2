import React, { Component } from 'react'

export default class Login extends Component {

  constructor(){
    super();
    //call the base class contseuctor 
    this.state={
      username:"",
      password:"",
    };
    // state: object from base class to hold data 
   
  }
  onChange=(e)=>{
    // need to collect data for changed fields and update the state
    //console.log(e.target.value);
    //console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value})
  };
  onSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { username, password}= this.state;

    return (
      <>
      <br />
        <section> 
    <h1 class="large text-primary">Login</h1>
<form class="form" onSubmit={this.onSubmit}>
    <div class="form-group"> 
    <input type="text" name="username" placeholder="Username" value={username} onChange={this.onChange}/>
    </div>
    <div class="form-group">
    <input type="password" name="password"  placeholder="Password" value={password} onChange={this.onChange}/>
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
