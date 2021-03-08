import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Button,
  StyleSheet,
} from 'react-native';

import TitleScreen from '../components/TitleScreen';
import PlayerItem from '../components/PlayerItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 90,
    backgroundColor: '#03071e',
  },
})

const PlayersScreen = ({ route, navigation }) => {
  const [ players, setPlayers ] = useState(null)

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
      {/* {console.log(players.filter((value) => {if (searchTerm == '') {return value} else if (value.nombre_del_jugador.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {return value}}))} */}
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
          onPress={() => navigation.navigate('Buscar Jugador', {players})}
        />
        <View style={styles.container}>
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
