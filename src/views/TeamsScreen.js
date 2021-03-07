import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';

import TitleScreen from '../components/TitleScreen';
import TeamItem from '../components/TeamItem';

const TeamsScreen = ({ route, navigation }) => {

  const [teams, setTeams] = useState(null)

  useEffect(function() {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/teams')
      const json = await response.json()
      setTeams(json)
    }
    fetchData()
  },[])

  return (
    <>
      <SafeAreaView>
        <TitleScreen title={route.name} />
        <View>
          <FlatList
            data={teams}
            renderItem={({item}) =>
              <TeamItem
              name={item}
              img={item}
              onPress={() => navigation.navigate('EquipoDetalle', item )}
            />
            }
            keyExtractor={item => item["id"]}
          />
        </View>
      </SafeAreaView>
    </>
  );
};



export default TeamsScreen;
