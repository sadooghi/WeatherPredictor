import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    //create an embeded googlemap , google.maps finds the html node we refrence to (here: this.refs.map)
    //and embeds a google map to that html node
    //second argument is options object
    new google.maps.Map(this.refs.map, {
      zoom:12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render () {
    //ref method in react : we can access this div any where in this component by using this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;