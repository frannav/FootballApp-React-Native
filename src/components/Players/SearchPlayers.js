import React, { useEffect, useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Button,
  TextInput
} from 'react-native';

import TitleScreen from '../TitleScreen'
import PlayerItem from '../PlayerItem'

const SearchPlayers = ({ route, navigation }) => {

  const [ name, onChangeText ] = useState(null)
  const [players, setPlayers] = useState(null)
  const [refreshing, setRefreshing] = useState(false);
  const [playersFiltered, setPlayersFiltered] = useState([])

  // console.log('ETO SI SEEECH', route.params["players"])

  // handleSearch = () => {
    // const playersFiltered = route.params["players"].filter((item) => {
    //   return item["Nombre del Jugador"].toLowerCase().include(name.toLowerCase())
    // })
  
  //   setPlayersFiltered(playersFiltered)
  // }

  // const filter = route.params["players"].filter((item) => {
  //   playersFiltered.push(item["Nombre del Jugador"])
  // })
  // console.log(route.params["players"]["Nombre del jugador"])
  const dataSet = route.params["players"] 
  const newDataSet = dataSet.map(a => a["Nombre del Jugador"])

  
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
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          name={name}
        />
        <View>
          {/* <FlatList
            data={players}
            renderItem={({item}) =>
            <PlayerItem
              name={item}
              img={item}
              onPress={() => navigation.navigate('JugadorDetalle', item)}
            />
            }
            keyExtractor={item => item["id"]}
          /> */}
        </View>
      </SafeAreaView>
    </>
  );
};



export default SearchPlayers;
