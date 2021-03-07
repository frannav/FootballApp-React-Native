import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';


const DEFAULT_logo = null
const DEFAULT_leagueId = null

const EditTeam = ({ route }) => {

  const [ name, onChangeText ] = useState(null)
  const [ leagueId, onChangeTeam ] = useState(DEFAULT_leagueId)
  const [ logo, onChangelogo ] = useState(DEFAULT_logo)
  const [ isOk, setIsOk ] = useState(null)
  const [ error, setError ] = useState(null)

  let dataToSend = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      "Nombre del equipo": `${name}`,
      "Logo del Equipo": `${logo}`,
      "Liga": `${leagueId}`
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/teams/${route.params["id"]}`, dataToSend)
      .then(res => res.json())
      .then(
        (result) => {
        },
        (error) => {
          setError(error)
        }
      )
    onChangeText(null)
    setIsOk(true)
  }
  
  return (
    <>
      <View>
        <Text>
          Añadir Jugador:
        </Text>
        <View>
          <Text>
            Nombre:
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text) & setIsOk(false)}
            name={name}
            clearButtonMode='always'
          />
          <Text>
            leagueId:
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeTeam(text) & setIsOk(false)}
            name={leagueId}
            clearButtonMode='always'
          />
          <Text>
            logo:
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangelogo(text) & setIsOk(false)}
            name={logo}
            clearButtonMode='always'
          />
        </View>
        <Button
          title='Pulsa para editar'
          onPress={handleSubmit}
        />
        { isOk ? <Text>Enviado</Text> : null }
        { error ? <Text>Error: {error.message}</Text> : null }
      </View>
    </>
  );
};



export default EditTeam;
