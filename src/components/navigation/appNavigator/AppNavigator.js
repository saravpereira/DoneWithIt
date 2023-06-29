import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingEditScreen from "../../listingEditScreen/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import colors from "../../../constants/colors";
import FeedNavigator from "../feedNavigator/FeedNavigator";
import navigationTheme from "../navigationTheme";
import AccountNavigator from "../accountNavigator/AccountNavigator";
import routes from "../routes";

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
          name={routes.FEED}
          component={FeedNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.EDIT}
          component={ListingEditScreen}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <NewListingButton
                onPress={() => navigation.navigate(routes.EDIT)}
              />
            ),
          })}
        />
        <Tab.Screen
          name={routes.ACCOUNT}
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
