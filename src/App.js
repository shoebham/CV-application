import { Component } from 'react';
import CVInput from './components/Inputs/CVInput';
import CVPreview from './components/Preview/CVPreview';
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
        <CVInput handleChange={this.handleChange}/>
        <CVPreview state={this.state}/>       
      </div>
    )
  }
}
export default App;
