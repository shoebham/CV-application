import { Component } from "react";

class WorkPreview extends Component{

    render(){
        const {companyName, jobTitle, jobDescription, jobStartDate, jobEndDate, jobLocation} = this.props.WorkDetails;
        return(
            <div>
                <p>Work</p>
                <p>Company Name: {companyName}</p>
                <p>Job Title: {jobTitle}</p>
                <p>Job Description: {jobDescription}</p>
                <p>Job Start Date: {jobStartDate}</p>
                <p>Job End Date: {jobEndDate}</p>
                <p>Job Location: {jobLocation}</p>
            </div>
        );
    }
}

export default WorkPreview