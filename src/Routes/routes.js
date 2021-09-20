import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Screens/Home/index';
import {Login} from '../Screens/Login/index';
import {SignUp} from '../Screens/SignUp';
import {SplashScreen} from '../Screens/SplashScreen';

export function Navigation() {
  const Nav = createStackNavigator();

  return (
    <Nav.Navigator initialRouteName="SplashScreen" headerShow={false}>
      <Nav.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{title: 'Welcome'}}
      />
      <Nav.Screen 
        name="Login" 
        component={Login} 
        options={{title: 'Welcome'}} />
      <Nav.Screen 
        name="Home" 
        component={Home} 
        options={{title: 'Home'}} />
      <Nav.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'SignUp'}}
      />
    </Nav.Navigator>
  );
}
