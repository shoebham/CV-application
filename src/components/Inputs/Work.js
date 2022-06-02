
import React, { Component } from "react";

class WorkInput extends Component{

    // const {firstName,lastName,contact,email,city,state,country} = props;
  render(){
    const {id,handleDelete} = this.props;
    return (
      <div>
          <div className="input-div">
          <center><p className="heading-input">Work</p></center>
          <input type="text" name="companyName" placeholder='Company Name' onChange={this.props.handleChange("WorkDetails",id)}/>
          <input type="text" name="jobTitle" placeholder='Job Title' onChange={this.props.handleChange("WorkDetails",id)}/>
          <input type="text" name="jobDescription" placeholder='Job Description' onChange={this.props.handleChange("WorkDetails",id)}/>
          <input type="text" name="jobStartDate" placeholder='Job Start Date' onChange={this.props.handleChange("WorkDetails",id)}/>
          <input type="text" name="jobEndDate" placeholder='Job End Date' onChange={this.props.handleChange("WorkDetails",id)}/>
          <input type="text" name="jobLocation" placeholder='Job Location' onChange={this.props.handleChange("WorkDetails",id)}/>
          {this.props.index>0&&<button className="delete-button" name="WorkDetails" onClick={handleDelete("WorkDetails",id) }>Delete Work</button>}
          </div>
      </div>
    );
  }
}
export default WorkInput;