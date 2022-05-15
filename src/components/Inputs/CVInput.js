import { Component } from "react";
import EducationInput from './Education';
import PersonalInput from './Personal';
import WorkInput from './Work';


class CVInput extends Component{
    render(){
        const {handleChange,state} = this.props;
        return (
            <div>
            <PersonalInput handleChange = {handleChange}/>
            {
                state.EducationDetails.map((education,index)=>{
                    console.log("education",education);
                    return <EducationInput key={index} handleChange = {handleChange} index={index} id={education.id}/>
                })
            }
            {
                state.WorkDetails.map((work,index)=>{
                    return <WorkInput key={index} handleChange = {handleChange} index={index} id={work.id}/>
                })   
            }
          </div>
        );
    }
}

export default CVInput