import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppList from "../pages/AppList";
import AppForm from "../pages/AppForm";

const Tab = createBottomTabNavigator();

function AppTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },
          tabStyle: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          labelStyle: {
            fontSize: 13,
            marginLeft: 16,
          },
          inactiveBackgroundColor: "#fafafc",
          activeBackgroundColor: "#ebebf5",
          inactiveTintColor: "#c1bccc",
          activeTintColor: "#32264d",
        }}
      >
        <Tab.Screen
          name="AppForm"
          component={AppForm}
          options={{
            tabBarLabel: "Adicionar",
          }}
        />
        <Tab.Screen
          name="AppList"
          component={AppList}
          options={{
            tabBarLabel: "Lista",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppTab;
