import React, {Component} from 'react';
import styles from '../assets/styles/login';
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
                       style={styles.backgroundImage}
                       blurRadius={5} >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Banquet</Text>
            <Text style={styles.subtitle}>Hall Finder</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputText}
                placeholder='Enter Mobile Number'
                placeholderTextColor='#C1C1C1'
              />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
