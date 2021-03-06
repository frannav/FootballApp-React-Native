import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import TitleScreen from '../components/TitleScreen';



const LeaguesScreen = ({ route, navigation }) => {
  return (
    <>
      <SafeAreaView>
        <TitleScreen title={route.name} />
      </SafeAreaView>
    </>
  );
};



export default LeaguesScreen;
