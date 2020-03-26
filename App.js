/* eslint-disable no-unused-vars */
import React from 'react';
import Login from './src/screens/login';
import Home from './src/screens/home';
import HallDeail from './src/screens/hallDetail';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
    <Login />
    </>
  );
};

export default App;
