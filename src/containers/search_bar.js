import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';
import { fetchWeather } from '../actions/index';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-gorup">
        <input
          placeholder="Get a five-day forcast in your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-gorup-btn">
          <button type="submit" className="btn btn-secondary" >Submit</button>
        </span>
      </form>
    );
  }
}