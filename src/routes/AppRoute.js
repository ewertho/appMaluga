import Dashboard from "../Dashboard";

import { createStackNavigator } from "@react-navigation/stack";

const Auth = createStackNavigator();

const AppAuth = () => {
  <Auth.Navigator>
    <Auth.Screen name="Dashboard" component={Dashboard} />
  </Auth.Navigator>;
};

export default AppAuth;
