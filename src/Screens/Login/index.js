import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {TextIn} from '../../components/TextInput';
import {ButtonLogin} from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const navigation = useNavigation();
  
  function handleLogin(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text styles={styles.title}>Welcome</Text>
      <TextIn example="Login" />
      <TextIn example="Password" contentSecure />
      <ButtonLogin color="#f05" title="Acessar" onPress={()=>navigation.navigate('Home')}/>
    </View>
  );
}
