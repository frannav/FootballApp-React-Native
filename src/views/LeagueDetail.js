import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';

const LeagueDetail = ({ route, navigation }) => {

  console.log(route.params)

  const [teams, setTeams] = useState(null)

  useEffect(function() {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/teams?Liga=${route.params["Identificador"]}`)
      const json = await response.json()
      setTeams(json)
    }
    fetchData()
  },[])


  const styles = StyleSheet.create({
    container: {
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center'
    },

    titleContainer: {
      marginTop: 40,
      marginBottom: 40,
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
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
      paddingRight: 10,
    },

    subTitle: {
      marginBottom: 20,
      padding: 18,
      textAlign: 'center',
      fontSize: 18,
      width: 1000,
      borderWidth: 1,

    },

  })

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            source={{ uri:  `${route.params["Logo de la Liga"]}`}}
            style={{
              marginRight: 25,
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 1
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
                Nombre del equipo: {item["Nombre del equipo"]}
              </Text>
            </View>
          }
        />
      </View>
    </>
  );
};



export default LeagueDetail;
