import React, { Component } from 'react'


class App extends Component {
  constructor() {
    super();
    this.state = {
      age : 21
    }
  }
 
  onAgeUp = () => {
    this.setState({
      ...this.state,
      age : ++this.state.age
    })
  }

  onAgeDown = () => {
    this.setState({
      ...this.state,
      age : --this.state.age
    })
  }

  render() {
    const {age} = this.state;
    return (
       <div className = "App">
          <div>
             Age : 
             <span> 
                 {age}
             </span>
          </div>
          <button onClick = {this.onAgeUp}>
             Age Up
          </button>
          <button onClick = {this.onAgeDown}>
             Age down
          </button>
        </div>
    );
  }
}

export default App;