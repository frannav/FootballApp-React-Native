import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#f48c06'
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  screenTitle: {
    padding: 100,
    fontSize: 40
  }
})

const TitleComponent = (props) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.screenTitle}>
            {props.title}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};



export default TitleComponent;
