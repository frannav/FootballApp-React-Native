import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './src/views/HomeScreen.js'
import LeaguesScreen from './src/views/LeaguesScreen.js'
import TeamsScreen from './src/views/TeamsScreen.js'
import PlayersScreen from './src/views/PlayersScreen.js'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray'
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

const styles = StyleSheet.create({
  
})

export default App;
