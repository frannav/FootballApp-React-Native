import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList
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

  return (
    <>
      <View>
        <Image
          source={{ uri:  `${route.params["Logo de la Liga"]}`}}
          style={{ width: 70, height: 70 }}
        />
        <Text>
          Nombre de la Liga: {route.params["Nombre De La Liga"]}
        </Text>
      </View>
      <View>
        <Text>
          Equipos de pertenecientes
        </Text>
      </View>
      <FlatList
        data={teams}
        renderItem={
          ({item}) =>
          <View>
            <Image
              source={{ uri:  `${item["Logo del Equipo"]}`}}
              style={{ width: 70, height: 70 }}
            />
            <Text>
              Nombre del equipo: {item["Nombre del equipo"]}
            </Text>
          </View>
        }
      />
    </>
  );
};



export default LeagueDetail;
