import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
})

const AddPlayer = () => {

  const [ value, onChangeText ] = useState(null)

  console.log(value)
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
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
      </View>
    </>
  );
};



export default AddPlayer;
