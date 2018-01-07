import React, { Component }from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      deadline: 'December 25,2018',
      newDeadline: ''
    }
  }

  changeDeadLine(){
  console.log('state',this.state);
    this.setState({deadline: this.state.newDeadline})
  }
  render(){
  return(
    <div className="App">
      <div className="App-titles">Countdown to {this.state.deadline}</div>
      <Clock deadline={this.state.deadline}
      />

      <div>
        <input placeholder='new date'
        onChange={event => this.setState({newDeadline:event.target.value})}
        />
        <button onClick={() => this.changeDeadLine()}>
          Submit
        </button>
      </div>
    </div>
    )
  }
}
export default App;
