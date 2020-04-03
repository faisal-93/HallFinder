import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class More extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Other options go here! </Text>
            </View>
        )
    }
}
