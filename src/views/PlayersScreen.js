import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Button,
  StyleSheet,
  TextInput,
  Text,
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
  const [ players, setPlayers ] = useState([])
  // const [ searchTerm, setSearchTerm ] = useState(null)

  useEffect(function() {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/players')
      const json = await response.json()
      console.log(json)
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
        {/* <TextInput
          onChange={(event) => setSearchTerm(event.target.value) }
        /> */}
        <View style={styles.container}>
          <FlatList
            // data={players
            //   .filter((value) => {
            //     if (searchTerm == '') {
            //       return value
            //     } else if (value.nombre_del_jugador.toLowerCase().includes(searchTerm.toLowerCase())) {
            //       return value
            //     }
            //   })
            // }
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
