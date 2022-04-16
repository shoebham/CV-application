import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        <input type="number" placeholder='Contact number'/>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Address'/>
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State'/>
        <input type="text" placeholder='Zip Code'/>
        <input type="text" placeholder='Country'/>
        {/* work experience details */}
        <input type="text" placeholder='Company Name'/>
        <input type="text" placeholder='Job Title'/>
        <input type="text" placeholder='Job Description'/>
        <input type="text" placeholder='Job Start Date'/>
        <input type="text" placeholder='Job End Date'/>
        <input type="text" placeholder='Job Location'/>
        {/* Education details */}
        <input type="text" placeholder='School Name'/>
        <input type="text" placeholder='School Location'/>
        <input type="text" placeholder='Degree'/>
        <input type="text" placeholder='Major'/> 
        <input type="text" placeholder='GPA'/>
        
      </div>
    )
  }
}
export default App;
