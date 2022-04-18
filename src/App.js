import { Component } from 'react';
import EducationInput from './components/Education';
import PersonalInput from './components/Personal';
import WorkInput from './components/Work';
class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <PersonalInput/>
        <EducationInput/>
        <WorkInput/>
      </div>
    )
  }
}
export default App;
