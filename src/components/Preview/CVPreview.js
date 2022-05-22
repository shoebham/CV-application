import { Component } from "react";
import EducationPreview from './EducationPreview';
import PersonalPreview from './PersonalPreview';
import WorkPreview from './WorkPreview';

class CVPreview extends Component{

    render(){
        const {state}= this.props
        return (
            <div className="CVPreview item">
            <PersonalPreview PersonalDetails = {state.PersonalDetails}/>
            <EducationPreview EducationDetails = {state.EducationDetails}/>
            <WorkPreview WorkDetails = {state.WorkDetails}/>
          </div>
        );
    }
}
export default CVPreview;