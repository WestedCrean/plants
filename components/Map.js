import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default class Map extends Component {
  render() {
    return (
        <MapView style={styles.map}  />
    );
  }
}