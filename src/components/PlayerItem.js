import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
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

const PlayerItem = ({ name, img }) => {
  return (
    <>
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri:  `${img["Avatar"]}`}}
          style={{ width: 70, height: 70 }}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text>
          {name["Nombre del Jugador"]}
        </Text>
      </View>
    </View>
    </>
  );
};



export default PlayerItem;