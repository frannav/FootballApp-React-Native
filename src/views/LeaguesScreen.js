import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Button
} from 'react-native';

import TitleScreen from '../components/TitleScreen';
import LeagueItem from '../components/LeagueItem';

const LeaguesScreen = ({ route, navigation }) => {

  const [leagues, setLeagues] = useState(null)

  useEffect(function() {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/leagues')
      const json = await response.json()
      setLeagues(json)
    }
    fetchData()
  },[])

  async function refreshData() {
    const response = await fetch('http://localhost:3000/leagues')
    const json = await response.json()
    setLeagues(json)
  }

  return (
    <>
        <SafeAreaView>
        <Button
          title='Actualizar'
          onPress={() => refreshData()}
        />
          <TitleScreen title={route.name} />
          <View>
            <FlatList
              data={leagues}
              renderItem={({item}) =>
                <LeagueItem
                  navigation={navigation}
                  name={item}
                  img={item}
                  onPress={() => navigation.navigate('LigaDetalle', item )}
                />
              }
              keyExtractor={item => item["Identificador"]}
            />
          </View>
        </SafeAreaView>
    </>
  );
};



export default LeaguesScreen;
