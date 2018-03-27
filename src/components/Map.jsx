import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MyMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
    zoom={props.zoom}
    center={props.center}
  >
    {props.onsens.length !== 0 && props.onsens.map((eachOnsen, index) => (
      <Marker
        key={eachOnsen.ID}
        position={{ lat: +eachOnsen.Latitude, lng: +eachOnsen.Longitude }}
        onClick={props.onMarkerToggle(index)}
      >
        {eachOnsen.infoWindow === true &&
          <InfoWindow onCloseClick={props.onMarkerToggle(index)}>
            <div>
              <p>{eachOnsen.Name}</p>
              <p>{eachOnsen.Address}</p>
            </div>
          </InfoWindow>
        }
      </Marker>
      ))}
  </GoogleMap>
)));

export default class Map extends Component {
  componentDidMount() {
    if (this.props.onsens.length === 0) {
      this.props.getOnsensData('Japan');
    }
  }

  render() {
    return (
      <MyMap
        containerElement={<div style={{ height: '800px', marginBottom: '50px' }} />}
        loadingElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLEMAPAPIKEY}`}
        onsens={this.props.onsens}
        onMarkerToggle={this.props.toggleOnsenInfoWindow}
        center={this.props.center}
        zoom={this.props.zoom}
      />
    );
  }
}

Map.propTypes = {
  getOnsensData: PropTypes.func.isRequired,
  onsens: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleOnsenInfoWindow: PropTypes.func.isRequired,
  center: PropTypes.objectOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
};
