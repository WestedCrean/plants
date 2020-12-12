import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './navigation/MainStackNavigator'
import { AuthNavigator } from './navigation/AuthNavigator'

export default function App() {
  const isSignedIn = true
  return (
    <NavigationContainer>
      {
        isSignedIn ? (
          <>
              <MainStackNavigator />
          </>
        ) : (
          <>
              <AuthNavigator />
          </>
        )
      }
    </NavigationContainer>
  );
}