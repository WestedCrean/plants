import React from 'react';
import { Platform, Button, StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Map from '../components/Map';

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
};

export default function MainActivity({ navigation }) {

  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        ToastAndroid.show('Permission to access location was denied', ToastAndroid.SHORT);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const setCurrentPosition = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      console.log({location})
      setLocation(location)
    } catch(e) {
      console.log({e})
    }
  }

  return (
    <View style={styles.viewContainer}>

      <View style={styles.mapContainer}>
        <Map region={location} showsUserLocation/>
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.searchRegionButton}>
          <Button  
            onPress={() => {}}
            title="Wyszukaj na tym obszarze"
            color="#60a163" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name={"camera-outline"} size={30} color="#000000" onPress={() => console.log("Pressed camera")}/>
        </TouchableOpacity>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    left: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchRegionButton: {
    elevation: 8,
    borderRadius: 80,
    padding: 10
  },
  currentLocation: {
    borderWidth: 1,
    borderColor:'rgba(0,0,0,0.4)',
    backgroundColor: "#c8e6c9",
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    borderRadius:100,
    position: 'absolute',
    top: 10,
    right: 10
  },
  button: {
    borderWidth: 1,
    borderColor:'rgba(0,0,0,0.4)',
    backgroundColor: "#c8e6c9",
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    borderRadius:100,
    position: 'relative',
    left: 10,
    bottom: 10
  },
});