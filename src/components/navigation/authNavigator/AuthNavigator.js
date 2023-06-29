import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../../welcomeScreen/WelcomeScreen";
import RegistrationScreen from "../../registrationScreen/RegistrationScreen";
import LoginScreen from "../../loginScreen/LoginScreen";
import navigationTheme from "../navigationTheme";
import routes from "../routes";

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.WELCOME_SCREEN}
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={routes.LOGIN_SCREEN}
          component={LoginScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name={routes.REGISTRATION_SCREEN}
          component={RegistrationScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
