import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1Ijoid2VzdGVkY3JlYW4iLCJhIjoiY2tpamdiZmJ5MDJncjJycDIyeWdiZ3d5MSJ9.F169lA6PqHy9qLjilO_jeQ");

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default class Map extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
        <MapboxGL.MapView style={styles.map} styleURL='mapbox://styles/westedcrean/ckinrx4iv43tg17ujcm6hgr7e' />
    );
  }
}