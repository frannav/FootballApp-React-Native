import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  
} from 'react-native';
import TeamsScreen from '../../views/TeamsScreen.js'
import TeamDetail from '../../views/TeamDetail.js';
import AddTeam from '../Teams/AddTeam.js';
import EditTeam from '../Teams/EditTeam.js';

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
          name='Detalles del Equipo'
          component={TeamDetail}
        />
        <Stack.Screen 
          name='Añadir Equipo'
          component={AddTeam}
        />
        <Stack.Screen 
          name='Editar Equipo'
          component={EditTeam}
        />
      </Stack.Navigator>
    </>
  );
};



export default TeamStack;
