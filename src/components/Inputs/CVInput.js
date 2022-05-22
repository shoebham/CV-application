import { Component } from "react";
import EducationInput from './Education';
import PersonalInput from './Personal';
import WorkInput from './Work';


class CVInput extends Component{
    render(){
        const {handleChange,state,handleAdd} = this.props;
        return (
            <div className="CVInput item">
            <PersonalInput id={state.PersonalDetails[0].id} handleChange={handleChange} state={state}/>
            
            {
                state.EducationDetails.map((education,index)=>{
                    return <EducationInput key={index} handleChange = {handleChange} index={index} id={education.id}/>
                })
            }
            <button name="EducationDetails" onClick={(e)=>handleAdd(e,"EducationDetails") }>Add Education</button>
            {
                state.WorkDetails.map((work,index)=>{
                    return <WorkInput key={index} handleChange = {handleChange} index={index} id={work.id}/>
                })   
            }
            <button name="WorkDetails" onClick={(e)=>handleAdd(e,"WorkDetails")}>Add work</button>
          </div>
        );
    }
}

export default CVInput