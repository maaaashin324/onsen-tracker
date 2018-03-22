import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 35.6811716, lng: 139.7648629 }}
  >
    {/* {props.positions.map(eachPosition => (<Marker position={{ eachPosition }} />))} */}
  </GoogleMap>
)));

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onsens: [],
    };
  }

  componentDidMount() {
    // if (this.state.onsens.length === 0) {
    //   this.props.getOnsensData();
    // }
  }

  render() {
    return (
      <MyMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '800px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    );
  }
}
