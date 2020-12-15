import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen'
import ParahScreen1 from './screens/ParahScreen1'
import ParahScreen2 from './screens/ParahScreen2'
import ParahScreen3 from './screens/ParahScreen3'
import ParahScreen4 from './screens/ParahScreen4'
import ParahScreen5 from './screens/ParahScreen5'
import ParahScreen6 from './screens/ParahScreen6'
import ParahScreen7 from './screens/ParahScreen7'
import ParahScreen8 from './screens/ParahScreen8'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import ParahScreen9 from './screens/ParahScreen9';
import ParahScreen10 from './screens/ParahScreen10';

export default class App extends React.Component {
  render(){
  return (
    <View>
    <AppContainer/>
    </View>
  );
  }
}
var AppNavigator  =  createSwitchNavigator({
  HomeScreen:HomeScreen,
  ParahScreen1:ParahScreen1,
  ParahScreen2:ParahScreen2,
  ParahScreen3:ParahScreen3,
  ParahScreen4:ParahScreen4,
  ParahScreen5:ParahScreen5,
  ParahScreen6:ParahScreen6,
  ParahScreen7:ParahScreen7,
  ParahScreen8:ParahScreen8,
  ParahScreen9:ParahScreen9,
  ParahScreen10:ParahScreen10
})
const AppContainer  = createAppContainer(AppNavigator)
