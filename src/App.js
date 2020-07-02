import React, { Component } from 'react';
import './App.css';


class App extends Component {
    state = {
        dropdown : 'Name',
        firstName : '',
        gender : '',
        data : []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    formSubmitted = (e) => {
      e.preventDefault();
      this.setState({
          data : [
              ...this.state.data,
              {
                dropdown : this.state.dropdown,
                firstName : this.state.firstName,
                gender : this.state.gender, 
              }
          ]
      })
    }

    render() {
        const {dropdown,firstName,gender,} = this.state;
        return (
            <form  onSubmit = {this.formSubmitted}>
              <select name = "dropdown"  onChange = {this.handleChange} value = {dropdown}>
                  <option>DK </option>
                 <option >SK</option>
                 <option >KK</option>
                 <option >RK</option>
                 <option>None</option>
              </select>
               <br/>
              <div>
                  <input
                    value = {firstName}
                    type = "text"
                     name = "firstName"
                     onChange = {this.handleChange}   
                  />
              </div>
              <div>
                 <input
                    value = {gender}
                    name = "gender"
                     value = "male"
                    type = "radio"
                    onChange = {this.handleChange}
                 /> Male
                 <input
                    value = {gender}
                    name = "gender"
                     value = "female"
                    type = "radio"
                    onChange = {this.handleChange}
                 /> female
              </div>
              <button type = "submit">Submit</button>
            </form>
        );
    }
}

export default App;