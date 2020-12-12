import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchInput from '../components/SearchInput'

export default function CatalogActivity() {

  const handleSearch = (query) => {
      console.log(query)
  }

  return (
    <View style={styles.container}>
      <SearchInput handleSearch={handleSearch}/>
      <Text>This is CatalogActivity View</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});