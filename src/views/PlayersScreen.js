import React, { useEffect, useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Button,
} from 'react-native';

import TitleScreen from '../components/TitleScreen';
import PlayerItem from '../components/PlayerItem';

const PlayersScreen = ({ route, navigation }) => {

  const [players, setPlayers] = useState(null)
  const [refreshing, setRefreshing] = useState(false);


  useEffect(function() {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/players')
      const json = await response.json()
      setPlayers(json)
    }
    fetchData()
  },[])

  async function refreshData() {
    const response = await fetch('http://localhost:3000/players')
    const json = await response.json()
    setPlayers(json)
  }

  return (
    <>
      <SafeAreaView>
        <Button
          title='Actualizar'
          onPress={() => refreshData()}
        />
        <TitleScreen title={route.name} />
        <Button
          title='Añadir Jugador'
          onPress={() => navigation.navigate('AñadirJugador')}
        />
        <Button
          title='Buscar Jugadores'
          onPress={() => navigation.navigate('BuscarJugador', {players})}
        />
        <View>
          <FlatList
            data={players}
            renderItem={({item}) =>
            <PlayerItem
              name={item}
              img={item}
              onPress={() => navigation.navigate('Detalles del Jugador', item)}
            />
            }
            keyExtractor={item => item["id"]}
          />
        </View>
      </SafeAreaView>
    </>
  );
};



export default PlayersScreen;
