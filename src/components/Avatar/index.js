import React from 'react';
import {Image, View} from 'react-native';

import AvatarJpeg from '../../../assets/avatar.jpeg';
import {styles} from './styles';

export function Avatar() {
  return (
    <View style={styles.container}>
      <Image source={AvatarJpeg} style={styles.avatar}  resizeMode="contain"/>
    </View>
  );
}
