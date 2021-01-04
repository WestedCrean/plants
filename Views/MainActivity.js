import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Map from '../components/Map';

export default function MainActivity({ navigation }) {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <TouchableOpacity >
        <Button  
          onPress={() => {}}
          title="Wyszukaj na tym obszarze"
          color="#841584"/>
          <TouchableOpacity style={styles.button}>
            <Ionicons name={"camera-outline"} size={30} color="#000000" onPress={() => navigation.navigate("Camera")}/>
          </TouchableOpacity>
         
       </TouchableOpacity>
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
  button: {
    borderWidth: 1,
    borderColor:'rgba(0,0,0,0.4)',
    backgroundColor: "#c8e6c9",
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',                                          
    bottom: 20,                                                    
    right: 20,
    height:70,
    borderRadius:100,
  },
});