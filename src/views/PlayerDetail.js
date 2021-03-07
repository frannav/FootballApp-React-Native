import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
} from 'react-native';

const PlayerDetail = ({ route, navigation }) => {

  
  const [team, setTeam] = useState(null)
  const [isOk, setIsOk] = useState(false)
  const [ error, setError ] = useState(null)
  
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
      <Button
        title='Editar jugador'
        onPress={() => navigation.navigate('EditarJugador', route.params)}
      />
      <Button
        title='Borrar Jugador'
        onPress={() => handleDelete()}
      />
      {isOk ? <Text>Jugador Borrado</Text> : null}
      {error ? <Text>Error: {error.message}</Text> : null}
    </>
  );
};



export default PlayerDetail;
