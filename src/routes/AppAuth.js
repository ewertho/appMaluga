import SignIn from "../pages/register/SignIn";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Auth = createStackNavigator();

const AppAuth = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
};

export default AppAuth;
