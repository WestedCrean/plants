import * as React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './navigation/MainStackNavigator'
import { AuthNavigator } from './navigation/AuthNavigator'

export default function App() {
  const isSignedIn = true

  const linking = {
    config: {
        screens: {
          MainActivity: {
            HomeScreen: 'Home',
            CatalogActivity: {
              Search: 'catalog',
              PlantViewActivity: 'catalog/plant/:id'
            },
          },
          Camera: 'camera',
          AddPlantObservationActivity: 'plantObservation',
          NotFound: '*',
        },
    }
  }

  return (
    <>
      <StatusBar backgroundColor="#4dbe4d" barStyle="light-content" />
      <NavigationContainer linking={linking}>
        {
          isSignedIn ? (
            <MainStackNavigator />
          ) : (
            <AuthNavigator />
          )
        }
      </NavigationContainer>
    </>
  );
}