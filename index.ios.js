import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header'
//Create Component
const App = () => (
  <Header headerText={'Album'} />
);

AppRegistry.registerComponent('albums', () => App);
