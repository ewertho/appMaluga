import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import IndexRoute from "./routes/IndexRoute";
import { AuthProvider } from "./Context/AuthContext";

const Index = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <IndexRoute />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Index;
