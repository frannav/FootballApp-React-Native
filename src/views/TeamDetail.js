import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';

const TeamDetail = ({ route, navigation }) => {

  console.log(route.params)

  const [players, setPlayers] = useState(null)

  useEffect(function() {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/players?teamId=${route.params["id"]}`)
      const json = await response.json()
      setPlayers(json)
    }
    fetchData()
  },[])

  return (
    <>
      <View>
        <Image
          source={{ uri:  `${route.params["Logo del Equipo"]}`}}
          style={{ width: 70, height: 70 }}
        />
        <Text>
          Nombre del equipo: {route.params["Nombre del equipo"]}
        </Text>
      </View>
      <View>
        <Text>
          Jugadores en el equipo
        </Text>
      </View>
      <FlatList
        data={players}
        renderItem={
          ({item}) =>
          <View>
            <Image
              source={{ uri:  `${item["Avatar"]}`}}
              style={{ width: 70, height: 70 }}
            />
            <Text>
              Nombre del equipo: {item["Nombre del Jugador"]}
            </Text>
          </View>
        }
      />
    </>
  );
};



export default TeamDetail;
