
import React, { Component } from "react";

class EducationInput extends Component{

    // const {firstName,lastName,contact,email,city,state,country} = props;

    render(){
      return (
        <div>
        <input type="text" name="schoolName" placeholder='School Name' onChange={this.props.handleChange("EducationDetails")}/>
        <input type="text" name="schoolLocation" placeholder='School Location' onChange={this.props.handleChange("EducationDetails")}/>
        <input type="text" name="degree" placeholder='Degree' onChange={this.props.handleChange("EducationDetails")}/>
        <input type="text" name="major" placeholder='Major' onChange={this.props.handleChange("EducationDetails")}/> 
        <input type="text" name="gpa" placeholder='GPA' onChange={this.props.handleChange("EducationDetails")}/>
        </div>
      );
    }
}
export default EducationInput;