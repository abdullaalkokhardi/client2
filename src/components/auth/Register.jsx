import React, { Component } from 'react'
import api from '../../utils/api';

export default class Register extends Component {
  constructor(){
    super();
    //call the base class contseuctor 
    this.state={
      name:"",
      email:"",
      password:"",
      confirmPassword:"", 
      errors:[],
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
    api.post('/users', this.state).then(res=>console.log(res.data)).catch((err)=>{
      this.setState({["errors"]: err.response.data.errors});
      console.log(err.response.data)
    });
    //  -end point -data -headers
    //then for success / catch for failure
  };

  render() {
    const { name, email, password, confirmPassword}= this.state;
    return (
      <>
       <section class="container">
        <br />
        <br />
        <br />

      <h1 class="large text-primary">Sign Up</h1>
      <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
      <form class="form" onSubmit={this.onSubmit}>
        <div class="form-group">
          <input type="text" placeholder="Name" name="name" value={name}
          onChange={this.onChange}
          />
          <div className='d-block invalid-feedback'>
            {this.state.errors.length!=0 && this.state.errors[0].msg}
          </div>
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} 
          onChange={this.onChange}/>
           <div className='d-block invalid-feedback'>
            {this.state.errors.length!=0 && this.state.errors[1].msg}
          </div>
          <small class="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={this.onChange}
            
          />
           <div className='d-block invalid-feedback'>
            {this.state.errors.length!=0 && this.state.errors[2].msg}
          </div>
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            minLength="6"
            value={confirmPassword}
            onChange={this.onChange}
            
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </form>
      <p class="my-1">
        Already have an account? <a href="/login">Sign In</a>
      </p>
    </section>
      </>
    )
  }
}
