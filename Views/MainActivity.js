import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MainActivity() {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.mapContainer}>
        <Text>This is Main Activity</Text>
      </View>
      <View style={styles.contextbutton}>
        <Button title="Wyszukaj" style={styles.button}/>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  mapContainer: {
    flex: 6,
    width: '100%',
    backgroundColor: '#80e27e',
    alignContent: 'center',
    justifyContent: 'center',
  },
  contextbutton: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 20
  }
});