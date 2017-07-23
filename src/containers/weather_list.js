import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 255 );
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    //below is the ES6 form of defining const lat = cityData.city.coord.lat and same for lon
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temp} color="orange" units="F" /></td>
        <td><Chart data={pressure} color="green" units="hPa"/></td>
        <td><Chart data={humidity} color="black" units="%"/></td>
      </tr>
    );
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempreture (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps ({ weather }) {
// havind {weather} as input is the same as having state as input and then define:
// const weather = state.weather
  return { weather };
}

export default connect (mapStateToProps)(WeatherList);