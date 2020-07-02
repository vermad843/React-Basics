import React, { Component } from 'react';
import './App.css';


class App extends Component {
    state = {
        firstName : 'Dk',
        lastName : 'Verma',
        data : []
    }

    handleChange = (e) => {
        let dataList = this.state.data;
        let check = e.target.checked;
        if(check) {
          this.setState({
            data : [
              ...this.state.data,
              this.state[e.target.name]
            ]
          })
         }
          else {
          let index = dataList.indexOf(this.state[e.target.name]);
          console.log(index)
          if(index > -1) {
            dataList.splice(index, 1);
            this.setState({
              data : dataList
            })
          }
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                   <label>
                        <input
                           name = "firstName"
                           type = "checkbox"
                           onChange = {this.handleChange}
                        />
                        firstName
                   </label>
                </div> 
                <div>
                   <label>
                        <input
                           name = "lastName"
                           type = "checkbox"
                           onChange = {this.handleChange}
                        />
                        lastName
                   </label>
                </div>            
            </div>
        );
    }
}

export default App;