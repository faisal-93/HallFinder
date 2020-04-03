import React, { Component } from 'react'
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from '../router/homeStackNavigator'
import Profile from '../components/profile'
import More from '../components/more'

const Tab = createBottomTabNavigator();

export default class HomeTabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName='Search'
                backBehavior='initialRoute'
                tabBarOptions={{
                    activeTintColor: '#1C6884',
                    labelPosition: 'below-icon',
                    labelStyle: {
                        fontFamily: 'Poppins-Light',
                        fontSize: 11
                    },
                    tabStyle: {
                        height: 53
                    },
                    style: {
                        backgroundColor: 'white',
                        height: 53
                    }
                }}>
                <Tab.Screen 
                    name='Search' 
                    component={HomeStackNavigator} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="magnifier" type='simple-line-icon' color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Profile' 
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" type='simple-line-icon' color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='More' 
                    component={More} 
                    options={{
                        tabBarLabel: 'More',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="menu" type='simple-line-icon' color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        )
    }
}
