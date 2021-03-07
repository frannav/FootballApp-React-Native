import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable
} from 'react-native';

const PlayerDetail = ({ route, navigation }) => {

  
  const [team, setTeam] = useState(null)
  
  useEffect(function() {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/teams?id=${route.params["teamId"]}`)
      const json = await response.json()
      setTeam(json)
    }
    fetchData()
  },[])
  return (
    <>
      <View>
        <Image
          source={{ uri:  `${route.params["Avatar"]}`}}
          style={{ width: 70, height: 70 }}
        />
        <Text>
          Nombre del Jugador: {route.params["Nombre del Jugador"]}
        </Text>
      </View>
      <View>
        <Text>
          Equipo Actual
        </Text>
      </View>
      <FlatList
        data={team}
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



export default PlayerDetail;
