import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
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

  itemContainer: {
    height: 170,
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

const PlayerDetail = ({ route, navigation }) => {

  
  const [team, setTeam] = useState(null)
  const [isOk, setIsOk] = useState(false)
  
  useEffect(function() {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/teams?id=${route.params["teamId"]}`)
      const json = await response.json()
      setTeam(json)
    }
    fetchData()
  },[])

  let dataToSend = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }


  function handleDelete() {
    fetch(`http://localhost:3000/players/${route.params["id"]}`, dataToSend)
    setIsOk(true)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            source={{ uri:  `${route.params["Avatar"]}`}}
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
            Nombre del Jugador: {route.params.nombre_del_jugador}
          </Text>
        </View>
        <View style={styles.buttomsContainer}>
          <Button
            title='Editar jugador'
            onPress={() => navigation.navigate('Editar Jugador', route.params)}
          />
          <Button
            title='Borrar Jugador'
            onPress={() => handleDelete()}
          />
          {isOk ? <Text>Jugador Borrado</Text> : null}
        </View>
        <View>
          <Text style={styles.subTitle}>
            Equipo Actual
          </Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={team}
            renderItem={
              ({item}) =>
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri:  `${item["Logo del Equipo"]}`}}
                  style={{ width: 70, height: 70 }}
                />
                <Text style={styles.titleItem}>
                  Nombre del equipo: {item["nombre_del_equipo"]}
                </Text>
              </View>
            }
          />
        </View>
        
      </View>
    </>
  );
};



export default PlayerDetail;
