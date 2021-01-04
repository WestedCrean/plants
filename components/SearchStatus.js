import React from 'react'
import { Text, StyleSheet } from 'react-native'

function SearchStatus({display}) {
    return display ? <Text style={styles.status}>Nie znaleziono</Text> : <></>
}

const styles = StyleSheet.create({
    status: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: 20,
    }
  });

export default SearchStatus