import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SearchResultItem = ({name, desc, handlePress}) => (
  <TouchableOpacity style={styles.item} onPress={handlePress}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.desc}>{desc}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 16,
    width: 350
  },
  title: {
    color: '#212121',
    textTransform: 'capitalize'
  },
  desc: {
    color: 'rgba(33,33,33,0.7)',
    textTransform: 'capitalize'
  }
});

export default SearchResultItem