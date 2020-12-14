
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  MainActivity,
  CatalogActivity,
} from '../Views'

const Tab = createBottomTabNavigator();

export default function HomeStackNavigator() {
    return (
        <Tab.Navigator
                  initialRouteName="HomeScreen"
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      console.log({route:route.name})
          
                      if (route.name === 'HomeScreen') {
                        iconName = focused
                          ? 'navigate'
                          : 'navigate-outline';
                      } else if (route.name === 'CatalogActivity') {
                        iconName = focused ? 'leaf' : 'leaf-outline';
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
          <Tab.Screen name="HomeScreen" component={MainActivity} options={{ title: 'Mapa' }}/>
          <Tab.Screen name="CatalogActivity" component={CatalogActivity} headerMode={false} options={{ title: 'Szukaj roślin' }} />
        </Tab.Navigator>
      
    );
  }