import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import TitleScreen from '../components/TitleScreen';

const HomeScreen = ({ route, navigation }) => {
  return (
    <>
      <SafeAreaView>
        <TitleScreen title={route.name}/>
      </SafeAreaView>
    </>
  );
};



export default HomeScreen;
