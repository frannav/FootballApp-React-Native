import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';


const DEFAULT_AVATAR = 'https://robohash.org/inutminus.png?size=250x250&set=set1'
const DEFAULT_TEAMID = ''

const AddPlayer = () => {

  const [ name, onChangeText ] = useState(null)
  const [ teamId, onChangeTeam ] = useState(DEFAULT_TEAMID)
  const [ avatar, onChangeAvatar ] = useState(DEFAULT_AVATAR)
  const [ isOk, setIsOk ] = useState(null)
  const [ error, setError ] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);

  let dataToSend = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      "Nombre del Jugador": `${name}`,
      "teamId": `${teamId}`,
      "Avatar": `${avatar}`
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/players', dataToSend)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
        },
        (error) => {
          setIsLoaded(true)
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
            teamId:
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeTeam(text) & setIsOk(false)}
            name={teamId}
            clearButtonMode='always'
          />
          <Text>
            Avatar:
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeTeam(text) & setIsOk(false)}
            name={teamId}
            clearButtonMode='always'
          />
        </View>
        <Button
          title='Pulsa para añadir el nuevo jugador'
          onPress={handleSubmit}
        />
        { isOk ? <Text>Enviado</Text> : null }
        { error ? <Text>Error: {error.message}</Text> : null }
      </View>
    </>
  );
};



export default AddPlayer;
