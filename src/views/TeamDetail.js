import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor:'#03071e'
  },

  titleContainer: {
    paddingTop: 70,
    paddingBottom: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f48c06'
  },

  itemContainer: {
    marginBottom: 18,
    display: 'flex',
    borderWidth: 1,
    borderRadius: 25,
    width: 390,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dee2ff',
  },

  title: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 22,
  },

  titleItem: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 18,
    paddingRight: 18,
  },

  subTitle: {
    marginBottom: 20,
    padding: 18,
    textAlign: 'center',
    fontSize: 18,
    width: 1000,
    borderWidth: 1,
    color: '#dee2ff',
    backgroundColor: '#03071e',

  },

})

const TeamDetail = ({ route, navigation }) => {

  const [refreshing, setRefreshing] = useState(false)
  const [players, setPlayers] = useState(null)
  const [isOk, setIsOk] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(function() {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/players?teamId=${route.params["id"]}`)
      const json = await response.json()
      setPlayers(json)
    }
    fetchData()
  },[])

  let dataToSend = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }


  async function handleDelete() {
    await fetch(`http://localhost:3000/teams/${route.params["id"]}`, dataToSend)
    setIsOk(true)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            source={{ uri:  `${route.params["Logo del Equipo"]}`}}
            style={{
              marginRight: 18,
              marginLeft: 18,
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 1
            }}
          />
          <Text style={styles.title}>
            Detalles del Equipo: {route.params["Nombre De La Liga"]}
          </Text>
        </View>
        <View>
          <Text style={styles.subTitle}>
            Jugadores en el equipo
          </Text>
        </View>
        <FlatList
          data={players}
          renderItem={
            ({item}) =>
            <View style={styles.itemContainer}>
              <Image
                source={{ uri:  `${item["Avatar"]}`}}
                style={{ width: 70, height: 70 }}
              />
              <Text style={styles.titleItem}>
                Nombre del equipo: {item["Nombre del Jugador"]}
              </Text>
            </View>
          }
        />
        <Button
          title='Editar jugador'
          onPress={() => navigation.navigate('EditarEquipo', route.params)}
        />
        <Button
          title='Borrar Equipo'
          onPress={() => handleDelete()}
        />
        {isOk ? <Text>Equipo Borrado</Text> : null}
        {error ? <Text>Error: {error.message}</Text> : null}
      </View>
    </>
  );
};



export default TeamDetail;
