import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingBottom: 200,
    backgroundColor: '#d8e2dc'
  },

  inputContainer: {
    paddingTop: 28,
    paddingBottom: 28,
  },

  title: {
    fontSize: 20,
    paddingBottom: 70,
  },

  text: {
    fontSize: 20,
    padding: 10,
  },

  buttom: {
    paddingTop: 30,
  },
})


const DEFAULT_AVATAR = 'https://robohash.org/inutminus.png?size=250x250&set=set1'
const DEFAULT_TEAMID = ''

const AddPlayer = () => {

  const [ name, onChangeText ] = useState(null)
  const [ teamId, onChangeTeam ] = useState(DEFAULT_TEAMID)
  const [ avatar, onChangeAvatar ] = useState(DEFAULT_AVATAR)
  const [ isOk, setIsOk ] = useState(null)
  const [ error, setError ] = useState(null)

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
      <View style={styles.container}>
        <Text style={styles.title}>
          Añadir Jugador:
        </Text>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>
              Nombre:
            </Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#e0fbfc' }}
              onChangeText={text => onChangeText(text) & setIsOk(false)}
              name={name}
              clearButtonMode='always'
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>
              teamId:
            </Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#e0fbfc' }}
              onChangeText={text => onChangeTeam(text) & setIsOk(false)}
              name={teamId}
              clearButtonMode='always'
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>
              Avatar:
            </Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#e0fbfc' }}
              onChangeText={text => onChangeAvatar(text) & setIsOk(false)}
              name={avatar}
              clearButtonMode='always'
            />
          </View>
        </View>
        <Button
          title='Pulsa para añadir el nuevo jugador'
          onPress={handleSubmit}
          style={styles.buttom}
        />
        { isOk ? <Text>Enviado</Text> : null }
        { error ? <Text>Error: {error.message}</Text> : null }
      </View>
    </>
  );
};



export default AddPlayer;
