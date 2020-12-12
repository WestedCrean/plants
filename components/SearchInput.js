import React from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';


export default function SearchInput({ handleSearch }) {
  const [value, onChangeText] = React.useState('');

  const onMessage = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }

  return (
        <SearchBar
        platform="android"
        containerStyle={{}}
        inputContainerStyle={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onChangeText={text => onChangeText(text)}
        placeholder={"Wyszukaj roślinę"}
        placeholderTextColor="#888"
        cancelButtonTitle="Cancel"
        cancelButtonProps={{}}
        onCancel={() => console.log(onMessage("Cancel"))}
        value={value}
    />
  );
};
