import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 35.6811716, lng: 139.7648629 }}
  >
    {props.onsens.map(eachOnsen =>
      (<Marker
        key={eachOnsen.ID}
        position={{ lat: +eachOnsen.Latitude, lng: +eachOnsen.Longitude }}
      />))}
  </GoogleMap>
)));

export default class Map extends Component {
  componentDidMount() {
    this.props.getOnsensData();
    console.log(Array.isArray(this.props.onsens));
  }

  render() {
    return (
      <MyMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '800px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        onsens={this.props.onsens}
      />
    );
  }
}

Map.propTypes = {
  getOnsensData: PropTypes.func.isRequired,
};
