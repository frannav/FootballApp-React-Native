import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Button
} from 'react-native';


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
    </>
  );
};



export default TeamDetail;
