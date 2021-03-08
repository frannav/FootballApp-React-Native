import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
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
                leagueId:
              </Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#e0fbfc' }}
                onChangeText={text => onChangeTeam(text) & setIsOk(false)}
                name={leagueId}
                clearButtonMode='always'
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>
                logo:
              </Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#e0fbfc' }}
                onChangeText={text => onChangelogo(text) & setIsOk(false)}
                name={logo}
                clearButtonMode='always'
              />
            </View>
          
        </View>
        <Button
          title='Pulsa para confirmar'
          onPress={handleSubmit}
          style={styles.buttom}
        />
        { isOk ? <Text>Enviado</Text> : null }
        { error ? <Text>Error: {error.message}</Text> : null }
      </View>
    </>
  );
};



export default EditTeam;
