import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

export function ButtonLogin(props) {
    const navigation = useNavigation()

function handleLogin(){
    navigation.navigate("Home")
}

    return (
        <Button onPress={handleLogin} style={styles.container} color={props.color} >
            <Text>{props.title}</Text>
        </Button>
    )
}
