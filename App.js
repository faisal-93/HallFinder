/* eslint-disable no-unused-vars */
import React from 'react';
import Home from './src/screens/home';
import Login from './src/screens/login';
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
