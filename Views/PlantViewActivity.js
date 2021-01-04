import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GetSinglePlant } from '../services/plantsapi'

const capitalize = (s) => {
  if (typeof s !== 'string') return s
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function PlantViewActivity({ navigation, route }) {
  const [plantTitle, setPlantTitle] = React.useState('');
  const [plantInfo, setPlantInfo] = React.useState(null);

  async function fetchPlantData(plantId) {
    // fetch from api
    // set info
    try {
      const res = await GetSinglePlant(plantId)
      setPlantInfo(res)
      setPlantTitle(capitalize(res.name))
    } catch(e) {
      console.log({e})
    }
    
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: plantTitle === '' ? 'Karta katalogowa' : plantTitle,
    });
  }, [navigation, plantTitle]);

  React.useEffect(() => {
    const { plantId } = route.params
    fetchPlantData(plantId)
  }, []);

  return (
    <View style={styles.container}>
      {
        plantInfo && (
          <>
            <Image
              style={styles.image}
              source={{
                uri: plantInfo.imgSrc,
              }}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{plantInfo.name}</Text>
              <Text>{plantInfo.desc}</Text>
            </View>
          </>
        )
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 400,
    height: 400,
    alignSelf: 'center',
  },
  name: {
    textTransform: 'capitalize',
    fontSize: 30,
    paddingBottom: 10
  },
  info: {
    padding: 10,
    flex: 1,
    alignItems: 'flex-start'
  }
});