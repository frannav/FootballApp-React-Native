import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  
} from 'react-native';

import PlayerDetail from '../../views/PlayerDetail.js';
import PlayersScreen from '../../views/PlayersScreen.js';
import AddPlayer from '../Players/AddPlayer.js';
import EditPlayer from '../Players/EditPlayer.js';

const Stack = createStackNavigator();

const PlayerStack = ({ route, navigation }) => {

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen 
          name='Jugadores'
          component={PlayersScreen}
        />
        <Stack.Screen 
          name='Detalles del Jugador'
          component={PlayerDetail}
        />
        <Stack.Screen 
          name='Añadir Jugador'
          component={AddPlayer}
        />
        <Stack.Screen 
          name='Editar Jugador'
          component={EditPlayer}
        />
      </Stack.Navigator>
    </>
  );
};



export default PlayerStack;
