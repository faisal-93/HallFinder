import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/login";
import SignUp from "../components/signup";
import HomeTabNavigator from "../router/homeTabNavigator";

const Stack = createStackNavigator();

export default class RootNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{ 
                            title: 'Login',
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name='SignUp'
                        component={SignUp}
                        options={{ 
                            title: 'SignUp',
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name='Home'
                        component={HomeTabNavigator}
                        options={{ 
                            title: 'Home',
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
