import React, { Component } from 'react'
import api from '../../utils/api';


export default class Login extends Component {

  constructor(){
    super();
    //call the base class contseuctor 
    this.state={
      email:"",
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
    api.post('/auth', this.state).then(res=>console.log(res.data)).catch()

  };
  render() {
    const { email, password}= this.state;

    return (
      <>
      <br />
        <section> 
    <h1 class="large text-primary">Login</h1>
<form class="form" onSubmit={this.onSubmit}>
    <div class="form-group"> 
    <input type="text" name="email" placeholder="Username" value={email} onChange={this.onChange}/>
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
