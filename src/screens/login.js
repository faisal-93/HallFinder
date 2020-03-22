import React, {Component} from 'react';
import style from '../assets/styles/style';
import {
  Text, 
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component {
  render() {    
    return (
      <ImageBackground source={require('../assets/images/background.jpg')} 
                       resizeMode="cover" 
                       style={style.backgroundImage}
                       blurRadius={5} >
        <View style={style.loginContainer}>
          <View style={style.titleContainer}>
            <Text style={style.title}>Banquet</Text>
            <Text style={style.subtitle}>Hall Finder</Text>
          </View>

          <View style={style.formContainer}>
            <View style={style.inputBox}>
              <TextInput
                style={style.inputText}
                placeholder='Enter Mobile Number'
                placeholderTextColor='#C1C1C1'
              />
            </View>

            <TouchableOpacity style={style.button}>
              <Text style={style.text}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
