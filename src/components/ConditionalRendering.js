import React, { Component } from 'react';
import './App.css';


class App extends Component {
    state = {
        eligible : false
    }

    handleChange = (e) => {
      this.setState({
          eligible : !this.state.eligible
       })
    }


    render() {
        const{eligible} = this.state;
        return (
            <> 
               {
                   eligible ?  (<div>
                        <h1>Eligibility</h1></div>)
                :  (<div>
                   <h1>Header</h1>
                    </div>)
               }     
               <form>
                   <input
                     name = "firstName"
                     type = "text"
                   />
               </form>
               <div>
                   <button
                       onClick = {this.handleChange}
                      >
                       Check
                   </button>
               </div>
            </>
        );
    }
}

export default App;