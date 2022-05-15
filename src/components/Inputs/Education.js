
import React, { Component } from "react";

class EducationInput extends Component{

    // const {firstName,lastName,contact,email,city,state,country} = props;
    
    render(){
    const {id} = this.props;
      return (
        <div>
          <p>Education</p>
          <input type="text" name="schoolName" placeholder='School Name' onChange={this.props.handleChange("EducationDetails",id)}/> 
          <input type="text" name="schoolLocation" placeholder='School Location' onChange={this.props.handleChange("EducationDetails",id)}/>
          <input type="text" name="degree" placeholder='Degree' onChange={this.props.handleChange("EducationDetails",id)}/>
          <input type="text" name="major" placeholder='Major' onChange={this.props.handleChange("EducationDetails",id)}/> 
          <input type="text" name="gpa" placeholder='GPA' onChange={this.props.handleChange("EducationDetails",id)}/>
        </div>
      );
    }
}
export default EducationInput;