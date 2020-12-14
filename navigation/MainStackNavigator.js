
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStackNavigator from './HomeStackNavigator'

import {
    CameraActivity,
    AddPlantObservationActivity,
} from '../Views'

const Stack = createStackNavigator();


export default function MainStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="MainActivity" >
            <Stack.Screen name="MainActivity" component={HomeStackNavigator} options={{ title: 'Znajdź rośliny w okolicy' }}/>
            <Stack.Screen name="Camera" component={CameraActivity} options={{ title: 'Aparat' }}/>
            <Stack.Screen name="AddPlantObservation" component={AddPlantObservationActivity} options={{ title: 'Dodaj obserwację' }}/>
        
        </Stack.Navigator>
      
    );
  }

export { MainStackNavigator }









