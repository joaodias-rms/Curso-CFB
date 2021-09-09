import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {styles} from './styles';

export function ButtonLogin(props) {

  const navigation = useNavigation();
  
  function handleLogin(){
    navigation.navigate('Home')
  }

  return (
    <Button title={props.title} style={styles.container} color={props.color} onPress={handleLogin}/>
  );
}
