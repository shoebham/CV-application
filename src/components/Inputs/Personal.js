import React, { Component } from "react";

class PersonalInput extends Component{

  render(){
    // const {firstName,lastName,contact,email,city,state,country}=this.props.state;
    const {id} = this.props;
    return (
      <div>
          <p>Personal</p>
        <input type="text" name="firstName" placeholder="First Name" onChange={this.props.handleChange("PersonalDetails",id)}/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={this.props.handleChange("PersonalDetails",id)}/>
        <input type="number" name="contact" placeholder="Contact number" onChange={this.props.handleChange("PersonalDetails",id)}/>
        <input type="email" name="email" placeholder="Email" onChange={this.props.handleChange("PersonalDetails",id)}/>
        <input type="text" name="city" placeholder="City" onChange={this.props.handleChange("PersonalDetails",id)}/>
        <input type="text" name="state" placeholder="State" onChange={this.props.handleChange("PersonalDetails",id)}/>
        <input type="text" name="country" placeholder="Country" onChange={this.props.handleChange("PersonalDetails",id)}/>
      </div>
    );
  }
}
export default PersonalInput;