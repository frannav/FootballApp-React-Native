import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  
} from 'react-native';
import LeaguesScreen from '../../views/LeaguesScreen.js'
import LeagueDetail from '../../views/LeagueDetail.js';
const Stack = createStackNavigator();

const LeagueStack = ({ route, navigation }) => {

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen 
          name='Ligas'
          component={LeaguesScreen}
        />
        <Stack.Screen 
          name='Detalles de la Liga'
          component={LeagueDetail}
        />
      </Stack.Navigator>
    </>
  );
};



export default LeagueStack;
