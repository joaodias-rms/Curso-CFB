import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import BarberLogo from '../../assets/barber.svg'

import {styles} from './styles';

export function SplashScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <BarberLogo widht="100%" height="160"/>
        </SafeAreaView>
    )
}
