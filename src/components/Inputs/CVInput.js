import { Component } from "react";
import EducationInput from './Education';
import PersonalInput from './Personal';
import WorkInput from './Work';


class CVInput extends Component{
    render(){
        const {handleChange,state,handleAdd,handleDelete} = this.props;

        return (
            <div className="CVInput item">
            <PersonalInput id={state.PersonalDetails[0].id} handleChange={handleChange} state={state}/>
            
            {
                state.EducationDetails.map((education,index)=>{
                    return <div key={index} index={index}>
                        <EducationInput key={index} handleChange = {handleChange} index={index} id={education.id}/>
                        
                        {index > 0&&<button name="EducationDetails" onClick={handleDelete("EducationDetails",education.id) }>Delete Education</button>}
                    </div>
                })
            }
            <button name="EducationDetails" onClick={(e)=>handleAdd(e,"EducationDetails") }>Add Education</button>
            {
                state.WorkDetails.map((work,index)=>{
                    return <div key={index} index={index}>
                        <WorkInput  handleChange = {handleChange}  id={work.id}/>
                        {index>0&&<button name="WorkDetails" onClick={handleDelete("WorkDetails",work.id) }>Delete Work</button>}
                        </div>
                })   
            }
            <button name="WorkDetails" onClick={(e)=>handleAdd(e,"WorkDetails")}>Add work</button>
            
          </div>
        );
    }
}

export default CVInput