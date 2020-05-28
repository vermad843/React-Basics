import React, { Component } from 'react'
import {connect} from 'react-redux';


class App extends Component {
 
  render() {
    const {age} = this.props;
    return (
       <div className = "App">
          <div>
             Age : 
             <span> 
                 {age}
             </span>
          </div>
          <button onClick = {this.props.onAgeUp}>
             Age Up
          </button>
          <button onClick = {this.props.onAgeDown}>
             Age down
          </button>
        </div>
    );
  }
}


//making state available to components
const mapStateToProps = (state) => {
  return {
    age : state.age
  } 
}


// converting methods into actions 
// actions have a type and a payload(what needs to be changed)

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp :  () => dispach({type : 'AGE_UP'}),
    onAgeDown :  () => dispach({type : 'AGE_DOWN'}),
  }
}

export default connect(mapStateToProps,mapDispachToProps)(App);