import { Component } from "react";

class EducationPreview extends Component{

    render(){
        const {schoolName, schoolLocation, degree, major, gpa} = this.props.EducationDetails;
        return (
            <div>
                <p>Education</p>
                <p>School Name: {schoolName}</p>
                <p>School Location: {schoolLocation}</p>
                <p>Degree: {degree}</p>
                <p>Major: {major}</p>
                <p>GPA: {gpa}</p>
            </div>
        );

    }
}

export default EducationPreview