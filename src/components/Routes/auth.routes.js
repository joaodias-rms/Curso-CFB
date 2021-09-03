import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#fff"
        },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login}/>
    </Navigator>
  );
}
