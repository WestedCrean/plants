import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Input, Image } from 'react-native-elements';

export default function AddPlantObservationActivity({ navigation, route }) {
  const [ plantTitle, setTitle ] = React.useState('')
  const [ plantImage, setImage ] = React.useState({
    uri: route.params?.observation ? route.params?.observation.photo.uri : null
  })
  const [ plantLocation, setLocation ] = React.useState(null)

  React.useEffect(() => {
    if (route.params?.observation) {
      const { photo, location } = route.params.observation
      setImage(photo)
      setLocation(location)
    }
  }, [route.params?.observation]);

  return (
    <View style={styles.container}>

      <View style={styles.image}>
        <Image
          source={{ uri: plantImage.uri }}
          style={{ width: 200, height: 200 }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      
      <View>
        <Input placeholder='Nazwij roślinę'/>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CatalogActivity")}
        >
          <Text>{"Znajdź w Katalogu"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createRecord: {
    fontSize: 30,
  }
});