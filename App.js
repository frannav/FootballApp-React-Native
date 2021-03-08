import React from 'react';
import {
  StyleSheet,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/views/HomeScreen.js'
// import LeaguesScreen from './src/views/LeaguesScreen.js'
import LeagueStack from './src/components/Leagues/LeagueStack.js'
// import TeamsScreen from './src/views/TeamsScreen.js'
import PlayersScreen from './src/views/PlayersScreen.js'
import TeamStack from './src/components/Teams/TeamStack.js';
import PlayerStack from './src/components/Players/PlayerStack.js';

const Tab = createBottomTabNavigator()

const MyLeagueStack = createStackNavigator()
const MyTeamStack = createStackNavigator()
const MyPlayerStack = createStackNavigator()

function LeaguesStackScreens() {
  return (
    <MyLeagueStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MyLeagueStack.Screen
        name='LeaguesList'
        component={LeagueStack}
      />
    </MyLeagueStack.Navigator>
  )
}

function TeamsStackScreens() {
  return (
    <MyTeamStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MyTeamStack.Screen
        name='TeamsStack'
        component={TeamStack}
      />
    </MyTeamStack.Navigator>
  )
}

function PlayersStackScreen() {
  return (
    <MyPlayerStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MyPlayerStack.Screen
        name='PlayersStack'
        component={PlayerStack}
      />
    </MyPlayerStack.Navigator>
  )
}

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
            },
            headerShown: false
          }}
        >
          {/* <Tab.Screen name='Inicio' component={HomeScreen} /> */}
          <Tab.Screen name='Ligas' component={LeaguesStackScreens} />
          <Tab.Screen name='Equipos' component={TeamsStackScreens} />
          <Tab.Screen name='Jugadores' component={PlayersStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
