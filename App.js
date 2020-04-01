/* eslint-disable no-unused-vars */
import React from 'react';
import Login from './src/components/login';
import Home from './src/components/home';
import HallDeail from './src/components/hallDetail';
import SignUp from './src/components/signup'
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
