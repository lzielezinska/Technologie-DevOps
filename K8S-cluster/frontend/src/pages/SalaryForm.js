import React from 'react';
import axios from "axios";


export default class SalaryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        salary:''
      };
      // this.changeHandler = this.changeHandler.bind(this);
      // this.handlerSubmit = this.handlerSubmit.bind(this);
    }
  
    changeHandler = (e) => {
      this.setState({[e.target.name]:[e.target.value]});
    }
      
    handlerSubmit = (e) => {
      e.preventDefault();
      axios.post("api/result", this.state)
      .then(response=>{
        console.log(response)
      })
      .then(error=>{
        console.log(error)
      });
    }
  
    render() {
      const {salary} = this.state
      return (
        <form onSubmit={this.handlerSubmit}>
          <label htmlFor="salary">Enter salary</label>
          <input type="text" name="salary" pattern="[0-9]*" value={salary} onChange={this.changeHandler} />
          <button type="submit">Send data!</button>
        </form>
      );
    }
  }
