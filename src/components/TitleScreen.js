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
  screenTitle: {
    padding: 100,
    fontSize: 42
  }
})

const TitleScreen = (props) => {
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



export default TitleScreen;
