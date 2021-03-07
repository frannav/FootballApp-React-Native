import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  
} from 'react-native';
import TeamsScreen from '../../views/TeamsScreen.js'
import TeamDetail from '../../views/TeamDetail.js';
const Stack = createStackNavigator();

const TeamStack = ({ route, navigation }) => {

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen 
          name='Equipos'
          component={TeamsScreen}
        />
        <Stack.Screen 
          name='EquipoDetalle'
          component={TeamDetail}
        />
      </Stack.Navigator>
    </>
  );
};



export default TeamStack;
