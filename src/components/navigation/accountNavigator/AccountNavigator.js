import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../../myAccountScreen/MyAccountScreen";
import MessagesScreen from "../../messagesScreen/MessagesScreen";
import routes from "../routes";

const AccountNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.MY_ACCOUNT_SCREEN}
          component={MyAccountScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={routes.MESSAGES_SCREEN}
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
