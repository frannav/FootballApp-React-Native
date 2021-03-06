import React from 'react';
import {
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
  },

  text: {
    color: '#ffffff',
    fontSize: 24,
  },

})

const PlayerItem = ({ onPress, name, img }) => {
  return (
    <>
      <Pressable onPress={onPress}>
        <View style={styles.container}>
          <View>
            <Image
              source={{ uri:  `${img["Avatar"]}`}}
              style={{ width: 70, height: 70 }}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              {name.nombre_del_jugador}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};



export default PlayerItem;
