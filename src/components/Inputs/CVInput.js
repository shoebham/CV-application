import { Component } from "react";
import EducationInput from './Education';
import PersonalInput from './Personal';
import WorkInput from './Work';


class CVInput extends Component{
    render(){
        const {handleChange,state,handleAdd,handleDelete} = this.props;
        return (
            <div className="CVInput item">
            <center><p className="input-heading">Input</p></center>
            <PersonalInput id={state.PersonalDetails[0].id} handleChange={handleChange} state={state}/>
            {
                state.EducationDetails.map((education,index)=>{
                    return <div key={index} index={index}>
                        <EducationInput key={index} handleChange = {handleChange} index={index} id={education.id} handleDelete={handleDelete}/>
                    </div>
                })
            }
            <center><button name="EducationDetails" onClick={(e)=>handleAdd(e,"EducationDetails") }>Add Education</button></center>
            {
                state.WorkDetails.map((work,index)=>{
                    return <div key={index} index={index}>
                        <WorkInput key={index} index={index} handleChange = {handleChange}  id={work.id} handleDelete={handleDelete}/>
                        </div>
                })   
            }
           <center> <button name="WorkDetails" onClick={(e)=>handleAdd(e,"WorkDetails")}>Add work</button>
           <button className="submit" name="submit">Submit</button></center>
          </div>
        );
    }
}

export default CVInput