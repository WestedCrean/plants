import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

export default function CameraActivity({ navigation }) {
  
  let CameraRef = useRef(null)
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Nie udzielono dostępu do kamery</Text>;
  }

  const takePhoto = async () => {
    if (CameraRef) {
      ToastAndroid.show('Robienie zdjęcia', ToastAndroid.SHORT);
      let photo = await CameraRef.takePictureAsync();
      console.log({ photo })
      ToastAndroid.show('Zrobiono zdjęcie', ToastAndroid.SHORT);
      let uri_to_save = FileSystem.documentDirectory + "savedPhotos/plantImage.jpg"
      try {
        await FileSystem.copyAsync({from: photo.uri, to: uri_to_save})
        photo.uri = uri_to_save
      } catch(e) {
        console.log({cameraError: e})
      }
      navigation.navigate("AddPlantObservation",
          {
            observation: {
              photo,
              location: '23'
            },
          })
    }
  }

  return( 
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref => { CameraRef = ref}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}>{
              type === Camera.Constants.Type.back
              ? "Przód"
              : "Tył"
            }</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cameraButton} onPress={() => takePhoto()}>
          <Ionicons name={"camera-outline"} size={30} color="#000000" onPress={() => navigation.navigate("Camera")}/>
        </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.2,
    paddingBottom: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  cameraButton: {
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
  }
});