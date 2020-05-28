import React, { Component } from 'react'
import {connect} from 'react-redux';


class App extends Component {
 
  render() {
    const {age, history} = this.props;
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
          <br/>
          <div>
            History
          </div>
          <div>
             <ul>
               {
                 history.map((el,i) => {
                   return (
                    <li className = "historyItem" key = {i} >
                     {el.age}
                    </li>
                   );
                 })
               }
             </ul>
          </div>
        </div>
    );
  }
}


//making state available to components
const mapStateToProps = (state) => {
  return {
    age : state.age,
    history : state.history
  } 
}


// converting methods into actions 
// actions have a type and a payload(what needs to be changed)

const mapDispachToProps = (dispach) => {
  return { 
    onAgeUp :  () => dispach({type : 'AGE_UP', value : 1}),
    onAgeDown :  () => dispach({type : 'AGE_DOWN' , value : 1}),
  }
}

export default connect(mapStateToProps,mapDispachToProps)(App);