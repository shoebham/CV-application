
import React from "react";

const EducationInput = (props) => {

    // const {firstName,lastName,contact,email,city,state,country} = props;

    return (
      <div>
        <input type="text" placeholder='Company Name'/>
        <input type="text" placeholder='Job Title'/>
        <input type="text" placeholder='Job Description'/>
        <input type="text" placeholder='Job Start Date'/>
        <input type="text" placeholder='Job End Date'/>
        <input type="text" placeholder='Job Location'/>
      </div>
    );
}
export default EducationInput;