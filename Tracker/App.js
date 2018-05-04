import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={
      latitude: '',
      longitude: '',
      error: '',
    }
  }
  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  // componentWillUnmount() {
  //    navigator.geolocation.clearWatch(this.watchId);
  // }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.maps}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
 },
  maps: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
 },
});
