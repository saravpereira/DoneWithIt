import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../../listingsScreen/ListingsScreen";
import ListingDetailScreen from "../../listingDetailScreen/ListingDetailScreen";
import routes from "../routes";

const FeedNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name={routes.LISTINGS_SCREEN}
        component={ListingsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={routes.LISTING_DETAILS}
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
