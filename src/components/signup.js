import React, { Component } from 'react';
import styles from '../assets/styles/signup';
import { 
    Text, 
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native'

export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../assets/images/background2.jpg')}
                    style={styles.image}
                    resizeMode='cover'
                    blurRadius= {3}  >
                    <Text style={styles.title}>Tell us something</Text>
                    <Text style={styles.subtitle}>about YOU</Text>
                </ImageBackground>
                <View style={styles.card}>
                    <Text style={styles.heading}>Basic Info</Text>
                    <View style={styles.underline}></View>
                    <View style={styles.formContainer}>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.inputText}
                                placeholder='Full Name'
                                placeholderTextColor='#C1C1C1'
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.inputText}
                                placeholder='Email'
                                placeholderTextColor='#C1C1C1'
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.inputText}
                                placeholder='Date of birth'
                                placeholderTextColor='#C1C1C1'
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.inputText}
                                placeholder='Address'
                                placeholderTextColor='#C1C1C1'
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
