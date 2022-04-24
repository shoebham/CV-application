
import React, { Component } from "react";

class WorkInput extends Component{

    // const {firstName,lastName,contact,email,city,state,country} = props;
  render(){

    return (
      <div>
          <input type="text" name="companyName" placeholder='Company Name' onChange={this.props.handleChange("WorkDetails")}/>
          <input type="text" name="jobTitle" placeholder='Job Title' onChange={this.props.handleChange("WorkDetails")}/>
          <input type="text" name="jobDescription" placeholder='Job Description' onChange={this.props.handleChange("WorkDetails")}/>
          <input type="text" name="jobStartDate" placeholder='Job Start Date' onChange={this.props.handleChange("WorkDetails")}/>
          <input type="text" name="jobEndDate" placeholder='Job End Date' onChange={this.props.handleChange("WorkDetails")}/>
          <input type="text" name="jobLocation" placeholder='Job Location' onChange={this.props.handleChange("WorkDetails")}/>
      </div>
    );
  }
}
export default WorkInput;