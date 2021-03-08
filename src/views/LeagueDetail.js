import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
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

const LeagueDetail = ({ route, navigation }) => {


  const [teams, setTeams] = useState(null)

  useEffect(function() {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/teams?Liga=${route.params["Identificador"]}`)
      const json = await response.json()
      setTeams(json)
    }
    fetchData()
  },[])

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            source={{ uri:  `${route.params["Logo de la Liga"]}`}}
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
            Detalles de la Liga: {route.params["Nombre De La Liga"]}
          </Text>
        </View>
        <View>
          <Text style={styles.subTitle}>
            Equipos de pertenecientes:
          </Text>
        </View>
        <FlatList
          data={teams}
          renderItem={
            ({item}) =>
            <View style={styles.itemContainer}>
              <Image
                source={{ uri:  `${item["Logo del Equipo"]}`}}
                style={{ width: 70, height: 70 }}
              />
              <Text style={styles.titleItem}>
                 Equipo:{item["nombre_del_equipo"]}
              </Text>
            </View>
          }
        />
      </View>
    </>
  );
};



export default LeagueDetail;
