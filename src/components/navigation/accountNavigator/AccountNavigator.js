import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MyAccountScreen from "../../myAccountScreen/MyAccountScreen";
import MessagesScreen from "../../messagesScreen/MessagesScreen";

const AccountNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="MyAccountScreen"
          component={MyAccountScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MessagesScreen"
          component={MessagesScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AccountNavigator;
