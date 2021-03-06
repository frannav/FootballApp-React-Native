import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View, 
  Text,
} from 'react-native';
import LeagueItem from '../components/Leagues/LeagueItem';
import TitleScreen from '../components/TitleScreen';

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

  return (
    <>
      <SafeAreaView>
        <TitleScreen title={route.name} />
        <View>
          <FlatList
            data={leagues}
            renderItem={({item}) => <LeagueItem name={item} img={item}/>}
            keyExtractor={item => item["Identificador"]}
            ListHeaderComponent={
              <View><Text>Todas las ligas</Text></View>
            }
          />
        </View>
      </SafeAreaView>
    </>
  );
};



export default LeaguesScreen;
