import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, ToastAndroid, ActivityIndicator } from 'react-native';

import { GetPlants } from '../services/plantsapi'
import SearchInput from '../components/SearchInput'
import SearchResultItem from '../components/SearchResultItem'

function renderSearchItem({item}) {
  return <SearchResultItem name={item.name} desc={item.desc}/>
}

export default function CatalogActivity() {

  const [queriedPlants, setQueriedPlants] = React.useState([
    {
      id: '1',
      name: "Parsley",
      desc: "Carrot Family"
    },
    {
      id: '2',
      name: "Kasztan",
      desc: "Kasztan Family"
    }
  ]);
  const [ isLoading, setLoading ] = React.useState(false)

  const handleSearch = async (query) => {
    if (query && query !== '') {
      setLoading(true)
      try {
        const plants = await GetPlants(query)
        setQueriedPlants(plants)
      } catch (e) {
        //soastAndroid.show(e.message, ToastAndroid.LONG);
        console.log({e})
      }
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput handleSearch={(q) => handleSearch(q)}/>
      { isLoading && <ActivityIndicator size="large" color="#38d138" style={styles.loading}/> }
      <FlatList
        data={queriedPlants}
        renderItem={renderSearchItem}
      />
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
    paddingTop: 10,
    paddingBottom: 10
  }
});