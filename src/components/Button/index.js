import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';

export function ButtonLogin(props) {
  return (
    <Button title={props.title} style={styles.container} color={props.color}>
      <Text>{}</Text>
    </Button>
  );
}
