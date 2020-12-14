import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    LoginActivity,
    RegisterActivity
  } from '../Views'

const Stack = createStackNavigator();


export default function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginActivity} />
            <Stack.Screen name="Register" component={RegisterActivity} />
        </Stack.Navigator>
    );
}

export { AuthNavigator }



