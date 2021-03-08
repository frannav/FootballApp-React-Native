import React, { useEffect, useState, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  // FlatList,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';

import TitleScreen from '../TitleScreen';
// import PlayerItem from '../PlayerItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 90,
    backgroundColor: '#03071e',
  },

  text: {
    color: '#d8e2dc',
  }
})

const SearchPlayers = ({ route, navigation }) => {
  const [ players, setPlayers ] = useState(null)
  const [ searchTerm, setSearchTerm] = useState('')

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
    // console.log(players.map(item => console.log('PELADO', item["Nombre del Jugador"])))
  }

  // data={players.filter((value) => {
            //   if (searchTerm == '') {
            //     return value
            //   } else if (value["Nombre del Jugador"].toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            //     return value
            //   }
            // })}

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
          onPress={() => navigation.navigate('Buscar Jugador', {players})}
        />
        <TextInput
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />
        <View style={styles.container}>
          {/* {players
            .filter((value) => {
              if (searchTerm == '') {
                return value
              } else if (value.Nombre_del_Jugador.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return value
              }
            }
            )
            .map(item => 
              <Text
                key={item["id"]}
                style={styles.text}
              >
                {item["Nombre del Jugador"]} 
              </Text>
            )
          } */}
        </View>
      </SafeAreaView>
    </>
  );
};



export default SearchPlayers;
