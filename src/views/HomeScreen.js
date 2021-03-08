import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import TitleComponent from '../components/TitleComponent';

const HomeScreen = ({ route, navigation }) => {
  return (
    <>
      <SafeAreaView>
        <TitleComponent title={route.name}/>
      </SafeAreaView>
    </>
  );
};



export default HomeScreen;
