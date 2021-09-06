import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import {Home} from '../Screens/Home/index';
import {Login} from '../Screens/Login/index';

export function Navigation() {
  const Nav = createStackNavigator();

  return (
    <Nav.Navigator initialRouteName="Login">
      <Nav.Screen name="Login" component={Login} options={{title: 'Welcome'}} />
      <Nav.Screen name="Home" component={Home} options={{title: 'Home'}} />
    </Nav.Navigator>
  );
}