import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';

export function TextIn(props) {
  return (
    <TextInput
      placeholderTextColor="#000"
      placeholder={props.example}
      secureTextEntry={props.contentSecure}
      style={styles.container}
    />
  );
}
