import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  
} from 'react-native';
import LeaguesScreen from '../../views/LeaguesScreen.js'
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
          name='JugadorDetalle'
          component={PlayerDetail}
        />
        <Stack.Screen 
          name='AñadirJugador'
          component={AddPlayer}
        />
        <Stack.Screen 
          name='EditarJugador'
          component={EditPlayer}
        />
      </Stack.Navigator>
    </>
  );
};



export default PlayerStack;
