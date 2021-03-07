import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Button
} from 'react-native';

import TitleScreen from '../components/TitleScreen';
import TeamItem from '../components/TeamItem';

const TeamsScreen = ({ route, navigation }) => {

  const [teams, setTeams] = useState(null)
  const [refreshing, setRefreshing] = useState(false);


  useEffect(function() {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/teams')
      const json = await response.json()
      setTeams(json)
    }
    fetchData()
  },[])

  async function refreshData() {
    const response = await fetch('http://localhost:3000/teams')
    const json = await response.json()
    setTeams(json)
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
          title='Añadir Equipo'
          onPress={() => navigation.navigate('AñadirEquipo')}
        />
        <View>
          <FlatList
            data={teams}
            renderItem={({item}) =>
              <TeamItem
              name={item}
              img={item}
              onPress={() => navigation.navigate('Detalles del Equipo', item )}
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
