import { Component } from 'react';
import EducationInput from './components/Education';
import PersonalInput from './components/Personal';
import WorkInput from './components/Work';
class App extends Component{
  constructor(){
    super();
    this.state={
      PersonalDetails:{
        firstName:"",
        lastName:"",
        contact:"",
        email:"",
        city:"",
        state:"",
        country:""
      },
      EducationDetails:{
        schoolName:"",
        schoolLocation:"",
        degree:"",
        major:"",
        gpa:""
      },
      WorkDetails:{
        companyName:"",
        jobTitle:"",
        jobDescription:"",
        jobStartDate:"",
        jobEndDate:"",
        jobLocation:""
      }
    };
    this.handleChange= this.handleChange.bind(this);
  }


  handleChange=(typeOfDetail)=>{
    return (e)=>{
      this.setState({
        [typeOfDetail]:{
          ...this.state[typeOfDetail],
        [e.target.name]:e.target.value,
        }
      })
      console.log(this.state[typeOfDetail]);
    }
  }

  render(){
    return (
      <div>
        <PersonalInput handleChange = {this.handleChange}/>
        <EducationInput handleChange = {this.handleChange}/>
        <WorkInput handleChange = {this.handleChange}/>
      </div>
    )
  }
}
export default App;
