import React from 'react';
import {
  Button,
  Text,
  Image,
  View,
  StyleSheet,
  Pressable
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  imgWrapper: {

  },

  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  }

})

const LeagueItem = ({ onPress, navigation, name, img }) => {
  return (
    <>
      <Pressable onPress={onPress}>
        <View style={styles.container}>
          <View>
            <Image
              source={{ uri:  `${img["Logo de la Liga"]}`}}
              style={{ width: 70, height: 70 }}
            />
          </View>
          <View style={styles.textWrapper}>
            {/* <Button title='Más detalles' onPress={() => navigation.navigate('Inicio')}/> */}
          </View>
          <View style={styles.textWrapper}>
            <Text>
              {name["Nombre De La Liga"]}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};



export default LeagueItem;
