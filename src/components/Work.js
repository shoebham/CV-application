
import React from "react";

const WorkInput = (props) => {

    // const {firstName,lastName,contact,email,city,state,country} = props;

    return (
      <div>
          <input type="text" placeholder='School Name'/>
        <input type="text" placeholder='School Location'/>
        <input type="text" placeholder='Degree'/>
        <input type="text" placeholder='Major'/> 
        <input type="text" placeholder='GPA'/>
      </div>
    );
}
export default WorkInput;