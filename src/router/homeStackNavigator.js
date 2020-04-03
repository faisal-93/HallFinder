import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/home'
import HallDetail from '../components/hallDetail'

const Stack = createStackNavigator();

export default class HomeStackNavigator extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ 
                        title: 'Home',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Hall Detail'
                    component={HallDetail}
                    options={{ 
                        title: 'Hall Detail',
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        )
    }
}
