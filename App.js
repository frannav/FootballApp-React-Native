import React from 'react';
import {
  StyleSheet,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './src/views/HomeScreen.js'
import LeaguesScreen from './src/views/LeaguesScreen.js'
import TeamsScreen from './src/views/TeamsScreen.js'
import PlayersScreen from './src/views/PlayersScreen.js'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            labelStyle: {
              fontSize: 14
            }
          }}
        >
          <Tab.Screen name='Inicio' component={HomeScreen} />
          <Tab.Screen name='Ligas' component={LeaguesScreen} />
          <Tab.Screen name='Equipos' component={TeamsScreen} />
          <Tab.Screen name='Jugadores' component={PlayersScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
