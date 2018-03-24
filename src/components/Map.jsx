import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MyMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 35.6811716, lng: 139.7648629 }}
  >
    {props.onsens.map(eachOnsen => (
      <Marker
        key={eachOnsen.ID}
        position={{ lat: +eachOnsen.Latitude, lng: +eachOnsen.Longitude }}
        onClick={props.onMarkerToggle}
      >
        {props.isMarkerToggle &&
          <InfoWindow onCloseClick={props.onMarkerToggle}>
            <p>Hello</p>
          </InfoWindow>
        }
      </Marker>
      ))}
  </GoogleMap>
)));

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.onMarkerToggle = this.onMarkerToggle.bind(this);

    this.state = {
      isMarkerOpen: false,
    };
  }
  componentDidMount() {
    this.props.getOnsensData();
  }

  onMarkerToggle() {
    this.setState({ isMarkerOpen: true });
  }

  render() {
    return (
      <MyMap
        containerElement={<div style={{ height: '800px' }} />}
        loadingElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        onsens={this.props.onsens}
        isMarkerToggle={this.state.isMarkerOpen}
        onMarkerToggle={this.onMarkerToggle}
      />
    );
  }
}

Map.propTypes = {
  getOnsensData: PropTypes.func.isRequired,
  onsens: PropTypes.arrayOf(PropTypes.object).isRequired,
};
