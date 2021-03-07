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

const Tab = createBottomTabNavigator()

const MyLeagueStack = createStackNavigator()
const MyTeamStack = createStackNavigator()

function LeaguesStackScreens() {
  return (
    <MyLeagueStack.Navigator>
      <MyLeagueStack.Screen
        name='LeaguesList'
        component={LeagueStack}
      />
    </MyLeagueStack.Navigator>
  )
}
function TeamsStackScreens() {
  return (
    <MyTeamStack.Navigator>
      <MyTeamStack.Screen
        name='TeamsList'
        component={TeamStack}
      />
    </MyTeamStack.Navigator>
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
            }
          }}
        >
          <Tab.Screen name='Inicio' component={HomeScreen} />
          {/* <Tab.Screen name='Ligas' component={LeaguesScreen} /> */}
          <Tab.Screen name='LeagueStack' component={LeaguesStackScreens} />
          <Tab.Screen name='Equipos' component={TeamsStackScreens} />
          <Tab.Screen name='Jugadores' component={PlayersScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
