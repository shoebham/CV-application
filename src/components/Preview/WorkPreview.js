import { Component } from "react";

class WorkPreview extends Component{

    render(){
        // const {companyName, jobTitle, jobDescription, jobStartDate, jobEndDate, jobLocation} = this.props.WorkDetails;
        const workDetails = this.props.WorkDetails;
        return(
            <div>
                {
                    workDetails.map((work,index)=>{
                        return (
                            <div key={index}>
                                <p><b>Work</b></p>
                                <p>Company Name: {work.companyName}</p>
                                <p>Job Title: {work.jobTitle}</p>
                                <p>Job Description: {work.jobDescription}</p>
                                <p>Job Start Date: {work.jobStartDate}</p>
                                <p>Job End Date: {work.jobEndDate}</p>
                                <p>Job Location: {work.jobLocation}</p>
                            </div>
                        )
                    })}
            </div>
        );
    }
}

export default WorkPreview