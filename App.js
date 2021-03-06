import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
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
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name='Home' component={HomeScreen}/>
          <Tab.Screen name='Leagues' component={LeaguesScreen}/>
          <Tab.Screen name='Teams' component={TeamsScreen}/>
          <Tab.Screen name='Players' component={PlayersScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
})

export default App;
