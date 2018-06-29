import React from 'react';
import GoogleMapReact from 'google-map-react'
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;


class TripView extends React.Component {


  render() {

      const triangleCoords = [
          {lat: 25.774, lng: -80.190},
          {lat: 18.466, lng: -66.118},
          {lat: 32.321, lng: -64.757},
          {lat: 25.774, lng: -80.190}
      ];


      const {selectedTrip} = this.props;
      const style = {
          width: '100%',
          height: '100%'
      }
      return (
            <div className="container">
              <div className="row">
                  <div className="card-body">
                      <h4 className="card-title">
                          {selectedTrip.name}
                      </h4>
                    <h5>{selectedTrip.description}</h5>
                  </div>
              </div>
                  <div className="row">

                      <Map
                          google={this.props.google}
                          style = {style}
                          initialCenter={{
                              lat: 40.854885,
                              lng: -88.081807
                          }}
                          zoom={3}
                          className={'map'}
                      />
                  </div>
          </div>

    )
  }
}
export default GoogleApiWrapper({
    key: ("AIzaSyBGDGARTFdB7pPRa_jX2M0Ow5NmbwmPWCQ")
})(TripView);

