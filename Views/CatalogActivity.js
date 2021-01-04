import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, ToastAndroid, ActivityIndicator } from 'react-native';

import { GetPlants } from '../services/plantsapi'
import SearchInput from '../components/SearchInput'
import SearchResultItem from '../components/SearchResultItem'
import SearchStatus from '../components/SearchStatus'



export default function CatalogActivity({ navigation }) {
  const [queriedPlants, setQueriedPlants] = React.useState([]);
  const [ isLoading, setLoading ] = React.useState(false)
  const [ isPristine, setPristine ] = React.useState(true)
  const fetchInitialPlants = async () => {
    setLoading(true)
    try {
      const plants = await GetPlants()
      setQueriedPlants(plants)
    } catch (e) {
      console.log({e})
    }
    setLoading(false)
  }

  React.useEffect( () => {
    fetchInitialPlants()
  } , [])

  const handleSearch = async (query) => {
    if (query && query !== '') {
      setPristine(false)
      setLoading(true)
      try {
        const plants = await GetPlants(query)
        setQueriedPlants(plants)
      } catch (e) {
        console.log({e})
      }
      setLoading(false)
    }
  }

  function renderSearchItem({item}) {
    return <SearchResultItem name={item.name} desc={item.desc} handlePress={() => {  
      navigation.navigate("PlantViewActivity", {
        plantId: item.id
      }) 
    }}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput handleSearch={(q) => handleSearch(q)}/>
      { 
        isLoading ? <ActivityIndicator size="large" color="#38d138" style={styles.loading}/> : 
        <React.Fragment>
          <SearchStatus display={!isPristine && queriedPlants.length === 0}/>
          <FlatList
            data={queriedPlants}
            renderItem={renderSearchItem}
          /> 
        </React.Fragment>}
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loading: {
    padding: 40
  }
});