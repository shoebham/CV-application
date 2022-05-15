import { Component } from 'react';
import CVInput from './components/Inputs/CVInput';
import CVPreview from './components/Preview/CVPreview';
import uniqid from 'uniqid'
class App extends Component{
  constructor(){
    super();
    this.state={
      PersonalDetails:[{
        id:uniqid(),
        firstName:"",
        lastName:"",
        contact:"",
        email:"",
        city:"",
        state:"",
        country:""
      }],
      EducationDetails:[
        {
          id:uniqid(),
          schoolName:"",
          schoolLocation:"",
          degree:"",
          major:"",
          gpa:""
        }
      ],
      WorkDetails:[{
        id:uniqid(),
        companyName:"",
        jobTitle:"",
        jobDescription:"",
        jobStartDate:"",
        jobEndDate:"",
        jobLocation:""
      }],
    };
    this.handleChange= this.handleChange.bind(this);
  }


  handleChange=(typeOfDetail,id)=>{
    return (e)=>{
      const {name,value}=e.target;
      this.setState({
        [typeOfDetail]:this.state[typeOfDetail].map(detail=>{
          if(detail.id===id){
            
            detail= {...detail, [name]:value}
          }
          console.log(detail);
          return detail
        })
      })
      console.log(this.state[typeOfDetail]);
    }
  }

  render(){
    return (
      <div>
        <CVInput handleChange={this.handleChange} state={this.state}/>
        <CVPreview state={this.state}/>       
      </div>
    )
  }
}
export default App;
