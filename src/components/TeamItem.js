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

const TeamItem = ({ onPress, name, img }) => {
  return (
    <>
      <Pressable onPress={onPress}>
        <View style={styles.container}>
          <View>
            <Image
              source={{ uri:  `${img["Logo del Equipo"]}`}}
              style={{ width: 70, height: 70 }}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              {name["Nombre del equipo"]}
            </Text>
          </View>
        </View>
    </Pressable>
    </>
  );
};



export default TeamItem;
