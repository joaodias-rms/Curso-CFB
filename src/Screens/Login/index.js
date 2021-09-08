import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {TextIn} from '../../components/TextInput';
import {ButtonLogin} from '../../components/Button';

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextIn example="Login" />
      <TextIn example="Password" contentSecure />
      <ButtonLogin color="#f05" title="Acessar" />
    </View>
  );
}
