import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

import TitleComponent from '../components/TitleComponent';
import TeamItem from '../components/Teams/TeamItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 90,
    backgroundColor: '#03071e',
  },
})

const TeamsScreen = ({ route, navigation }) => {

  const [teams, setTeams] = useState(null)
  const [ searchTerm, setSearchTerm ] = useState('')

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
        <TitleComponent title={route.name} />
        <Button
          title='Añadir Equipo'
          onPress={() => navigation.navigate('Añadir Equipo')}
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
          <FlatList
            // 🔴 it Works if works if you do not restart the app
            // data={teams
            //   .filter((value) => {
            //     if (searchTerm == '') {
            //       return value
            //     } else if (value.nombre_del_equipo.toLowerCase().includes(searchTerm.toLowerCase())) {
            //       return value
            //     }
            //   })
            // }
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
