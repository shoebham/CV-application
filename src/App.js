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
          return detail
        })
      })
    }
  }

  handleAdd=(e,typeOfDetail)=>{
    e.preventDefault();
      if(typeOfDetail==="EducationDetails"){
        this.setState({
          [typeOfDetail]:[
            ...this.state[typeOfDetail],
            {
            id:uniqid(),
            schoolName:"",
            schoolLocation:"",
            degree:"",
            major:"",
            gpa:""
          }
        ]
        })
      }
    else if(typeOfDetail==="WorkDetails"){
      this.setState({
        [typeOfDetail]:[
          ...this.state[typeOfDetail],
          {
          id:uniqid(),
          companyName:"",
          jobTitle:"",
          jobDescription:"",
          jobStartDate:"",
          jobEndDate:"",
          jobLocation:""
        }
      ]
      })
    }
    console.log(this.state)
  }

  handleDelete=(typeOfDetail,id)=>{
    return (e)=>{
      this.setState({
        [typeOfDetail]:this.state[typeOfDetail].filter(detail=>{
          return detail.id!==id
        })
      })
    }
  }
  render(){
    return (
      <div className="main">
        <CVInput handleChange={this.handleChange} state={this.state} handleAdd={this.handleAdd} handleDelete={this.handleDelete}/>
        <CVPreview  state={this.state} />       
      </div>
    )
  }
}
export default App;
