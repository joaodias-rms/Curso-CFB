import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {Avatar} from '../../components/Avatar';

export function Home() {
  return (
    <View style={styles.container}>
      <Avatar />
     <TouchableOpacity>
        <Icon name="cog" size={24}/>
     </TouchableOpacity>
    </View>
  );
}
