import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View, 
  Text,
  Image
} from 'react-native';
import LeagueItem from '../components/Leagues/LeagueItem';
import TitleScreen from '../components/TitleScreen';

const DATA = [
  {
    "Nombre De La Liga": "Sierra",
    "Identificador": "a249ed6a-ad8e-4692-9758-5d19454752f3",
    "Logo de la Liga": "https://robohash.org/nihilquasiquis.png?size=50x50&set=set1"
  },
  {
    "Nombre De La Liga": "Alfa Juliett",
    "Identificador": "4ddb5753-679c-4500-906a-f7b2a5f3f95c",
    "Logo de la Liga": "https://robohash.org/quisaccusantiumin.png?size=50x50&set=set1"
  },
  {
    "Nombre De La Liga": "Uniform Zulu",
    "Identificador": "0a886c97-032e-4f37-8caf-24d875b2ac21",
    "Logo de la Liga": "https://robohash.org/nonnecessitatibusexpedita.png?size=50x50&set=set1"
  },
  {
    "Nombre De La Liga": "November",
    "Identificador": "e1ebc55c-925e-4ce4-bd66-49c41b4b3895",
    "Logo de la Liga": "https://robohash.org/suntutut.png?size=50x50&set=set1"
  },
  {
    "Nombre De La Liga": "Whiskey Hotel",
    "Identificador": "2b44c97f-c1f8-4731-a627-4bdedcca7ece",
    "Logo de la Liga": "https://robohash.org/solutamolestiaesunt.png?size=50x50&set=set1"
  }
]

const LeaguesScreen = ({ route, navigation }) => {
  return (
    <>
      <SafeAreaView>
        <TitleScreen title={route.name} />
        <View>
          <FlatList
            data={DATA}
            renderItem={({item}) => <LeagueItem name={item} img={item}/>}
            keyExtractor={item => item["Identificador"]}
          />
        </View>
      </SafeAreaView>
    </>
  );
};



export default LeaguesScreen;
