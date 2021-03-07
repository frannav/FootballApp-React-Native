import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';

import TitleScreen from '../components/TitleScreen';
import PlayerItem from '../components/PlayerItem';

const PlayersScreen = ({ route, navigation }) => {

  const [players, setPlayers] = useState(null)

  useEffect(function() {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/players')
      const json = await response.json()
      setPlayers(json)
    }
    fetchData()
  },[])

  return (
    <>
      <SafeAreaView>
        <TitleScreen title={route.name} />
        <View>
          <FlatList
            data={players}
            renderItem={({item}) =>
            <PlayerItem
              name={item}
              img={item}
              onPress={() => navigation.navigate('JugadorDetalle', item)}
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
