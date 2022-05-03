import { Component } from "react";
import EducationInput from './Education';
import PersonalInput from './Personal';
import WorkInput from './Work';


class CVInput extends Component{
    render(){
        const {handleChange} = this.props;
        return (
            <div>
            <PersonalInput handleChange = {handleChange}/>
            <EducationInput handleChange = {handleChange}/>
            <WorkInput handleChange = {handleChange}/>
          </div>
        );
    }
}

export default CVInput