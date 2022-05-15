import { Component } from "react";

class EducationPreview extends Component{

    render(){
        // const {schoolName, schoolLocation, degree, major, gpa} = this.props.EducationDetails;
        const educationDetails = this.props.EducationDetails;
        return (
            <div>
                {
                educationDetails.map((education,index)=>{
                    return (
                        <div key={index}>  
                            <p><b>Education</b></p>
                            <p>School Name: {education.schoolName}</p>
                            <p>School Location: {education.schoolLocation}</p>
                            <p>Degree: {education.degree}</p>
                            <p>Major: {education.major}</p>
                            <p>GPA: {education.gpa}</p>
                        </div>
                    )
                })}
            </div>
        );

    }
}

export default EducationPreview