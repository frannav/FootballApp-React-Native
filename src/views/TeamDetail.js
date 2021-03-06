import React, { useEffect, useState } from 'react';
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

  buttomsContainer: {
    paddingLeft: 80,
    paddingRight: 80,
    width: 500,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    backgroundColor: '#ffffff',
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

  const [players, setPlayers] = useState(null)
  const [isOk, setIsOk] = useState(false)

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
              borderWidth: 1,
              backgroundColor: '#cbf3f0',
            }}
          />
          <Text style={styles.title}>
            Detalles del Equipo: {route.params["nombre_del_equipo"]}
          </Text>
        </View>
        <View style={styles.buttomsContainer}>
          <Button
            title='Editar Equipo'
            onPress={() => navigation.navigate('Editar Equipo', route.params)}
          />
          <Button
            title='Borrar Equipo'
            onPress={() => handleDelete()}
          />
          {isOk ? <Text>Equipo Borrado</Text> : null}
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
                 Jugador:{item.nombre_del_jugador}
              </Text>
            </View>
          }
        />
      </View>
    </>
  );
};



export default TeamDetail;
