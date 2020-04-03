/* eslint-disable no-unused-vars */
import React from 'react';
import RootNavigator from './src/router/rootNavigator';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
    <StatusBar backgroundColor="#cccccc" barStyle="dark-content"/>
    <RootNavigator />
    </>
  );
};

export default App;
