import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyAccountScreen from "../../myAccountScreen/MyAccountScreen";
import ListingEditScreen from "../../listingEditScreen/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import colors from "../../../constants/colors";
import FeedNavigator from "../feedNavigator/FeedNavigator";
import navigationTheme from "../navigationTheme";
import AccountNavigator from "../accountNavigator/AccountNavigator";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primaryColor,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Edit"
          component={ListingEditScreen}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <NewListingButton onPress={() => navigation.navigate("Edit")} />
            ),
          })}
        />
        <Tab.Screen
          name="Account"
          component={AccountNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
