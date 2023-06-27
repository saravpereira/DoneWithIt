import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ListingsScreen from "../../listingsScreen/ListingsScreen";
import ListingDetailScreen from "../../listingDetailScreen/ListingDetailScreen";

const FeedNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="ListingsScreen"
        component={ListingsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ListingDetailScreen"
        component={ListingDetailScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
