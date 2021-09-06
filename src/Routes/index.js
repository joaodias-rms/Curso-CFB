
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './routes'

export function Routes() {
    return (
        <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    )
}
