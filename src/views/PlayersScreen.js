import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  FlatList,
  Button,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

import TitleComponent from '../components/TitleComponent';
import PlayerItem from '../components/Players/PlayerItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 90,
    backgroundColor: '#03071e',
  },
})

const PlayersScreen = ({ route, navigation }) => {
  const [ players, setPlayers ] = useState(null)
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ loading, setIsLoading ] = useState(true)

  useEffect(function() {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/players')
      const json = await response.json()
      const array = json.map((i) => i)
      setPlayers(array)
      setIsLoading(false)
    }
    fetchData()
  },[])

  async function refreshData() {
    const response = await fetch('http://localhost:3000/players')
    const json = await response.json()
    const array = json.map(i => i)
    setPlayers(array)
  }

  return (
    <>
      <SafeAreaView>
        <Button
          title='Actualizar'
          onPress={() => refreshData()}
        />
        <TitleComponent title={route.name} />
        <Button
          title='Añadir Jugador'
          onPress={() => navigation.navigate('Añadir Jugador')}
        />
        <TextInput
          onChangeText={(text) => setSearchTerm(text)}
          placeholder='Escribe el nombre'
          style={{
            height: 40,
            fontSize: 20,
            textAlign: 'center'
          }}
        />
        <View style={styles.container}>
          {loading ?  <ActivityIndicator /> : 
          <FlatList
            // 🔴 it Works if works if you do not restart the app
            data={players
              .filter((value) => {
                if (searchTerm == '') {
                  return value
                } else if (value.nombre_del_jugador.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return value
                }
              })
            }
            // data={players}
            renderItem={({item}) =>
            <PlayerItem
              name={item}
              img={item}
              onPress={() => navigation.navigate('Detalles del Jugador', item)}
            />
            }
            keyExtractor={item => item["id"]}
          />
          }
        </View>
      </SafeAreaView>
    </>
  );
};



export default PlayersScreen;
