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

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen}/>
          <Tab.Screen name='Leagues' component={LeaguesScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
})

export default App;
