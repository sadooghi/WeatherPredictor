import React, { Component } from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
