import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  MainActivity,
  CatalogActivity
} from '../Views'

const Tab = createBottomTabNavigator();



const MainStackNavigator = () => {
    return (
        <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Główna') {
                        iconName = focused
                          ? 'home'
                          : 'home-outline';
                      } else if (route.name === 'Katalog') {
                        iconName = focused ? 'library' : 'library-outline';
                      }
          
                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerStyle: {
                        backgroundColor: "#9AC4F8",
                      },
                    headerTintColor: "white",
                    headerBackTitle: "Back",
                  })}
                  tabBarOptions={{
                    activeTintColor: '#4dbe4d',
                    inactiveTintColor: 'gray',
                  }}
        >
          <Tab.Screen name="Główna" component={MainActivity} />
          <Tab.Screen name="Katalog" component={CatalogActivity} />
        </Tab.Navigator>
      
    );
  }

export { MainStackNavigator }

