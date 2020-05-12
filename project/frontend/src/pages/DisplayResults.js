import React from 'react';
import axios from "axios";


export default class DisplayResults extends React.Component {    
    constructor(props) {
      super(props);
      this.state={
        salary: {}
      };
      this.getResults = this.getResults.bind(this);
      this.DisplayResultsSalaries = this.DisplayResultsSalaries.bind(this);

    }
  
    getResults = async () => {
        const results = await axios.get('/api/results');
        console.log(results);
        this.setState({
            salary: results.data,
        });
    }

    componentDidMount() {
        this.getResults();
        }

    DisplayResultsSalaries() {
        const results = this.state.salary.map(res => (
            <li>{res}</li>
        ))
        return results;
    }

    render() {
      return (
            <p>Results: </p>
      );
    }
  }