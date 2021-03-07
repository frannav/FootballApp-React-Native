import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';


const DEFAULT_LOGO = 'https://robohash.org/inutminus.png?size=250x250&set=set1'
const DEFAULT_LIGAID = ''

const AddTeam = () => {

  const [ name, onChangeText ] = useState(null)
  const [ leagueId, onChangeLeague ] = useState(DEFAULT_LIGAID)
  const [ logo, onChangeLogo ] = useState(DEFAULT_LOGO)
  const [ isOk, setIsOk ] = useState(null)
  const [ error, setError ] = useState(null)

  let dataToSend = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      "Nombre del equipo": `${name}`,
      "leagueId": `${leagueId}`,
      "Logo del Equipo": `${logo}`
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/teams', dataToSend)
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
            onChangeText={text => onChangeLeague(text) & setIsOk(false)}
            name={leagueId}
            clearButtonMode='always'
          />
          <Text>
            Avatar:
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeLogo(text) & setIsOk(false)}
            name={logo}
            clearButtonMode='always'
          />
        </View>
        <Button
          title='Pulsa para añadir el nuevo equipo'
          onPress={handleSubmit}
        />
        { isOk ? <Text>Enviado</Text> : null }
        { error ? <Text>Error: {error.message}</Text> : null }
      </View>
    </>
  );
};



export default AddTeam;
