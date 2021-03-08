import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Button,
  StyleSheet
} from 'react-native';

import TitleComponent from '../components/TitleComponent';
import LeagueItem from '../components/Leagues/LeagueItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 90,
    backgroundColor: '#03071e',
  },
})

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
          <TitleComponent title={route.name} />
          <View style={styles.container}>
            <FlatList
              data={leagues}
              renderItem={({item}) =>
                <LeagueItem
                  navigation={navigation}
                  name={item}
                  img={item}
                  onPress={() => navigation.navigate('Detalles de la Liga', item )}
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
