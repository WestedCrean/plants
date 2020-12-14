import React, { useEffect } from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';


export default function SearchInput({ handleSearch }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <>
    <SearchBar
              style={{fontSize: 24}}
              platform="android"
              containerStyle={{}}
              inputContainerStyle={{}}
              inputStyle={{}}
              leftIconContainerStyle={{}}
              rightIconContainerStyle={{}}
              loadingProps={{}}
              onChangeText={text => setSearchQuery(text)}
              placeholder={"Wyszukaj roślinę"}
              placeholderTextColor="#888"
              cancelButtonTitle="Cancel"
              cancelButtonProps={{}}
              value={searchQuery}
          />
    <View 
      style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: 0,
          width: 300
        }}>
      
      <Button title="Wyszukaj" type="outline" color="#38d138" onPress={() => handleSearch(searchQuery)}/>
    </View>
    </>
  );
};
