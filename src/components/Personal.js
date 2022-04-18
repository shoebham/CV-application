import React, { Component } from "react";

class PersonalInput extends Component{
  constructor(){
    super();
    this.state={
      firstName:"",
      lastName:"",
      contact:"",
      email:"",
      city:"",
      state:"",
      country:""
    };
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(this.state);
  }
  render(){
    const {firstName,lastName,contact,email,city,state,country}=this.state;
    return (
      <div>
        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
        <input type="number" name="contact" placeholder="Contact number" onChange={this.handleChange}/>
        <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
        <input type="text" name="city" placeholder="City" onChange={this.handleChange}/>
        <input type="text" name="state" placeholder="State" onChange={this.handleChange}/>
        <input type="text" name="country" placeholder="Country" onChange={this.handleChange}/>
      </div>
    );
  }
}
export default PersonalInput;