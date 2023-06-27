import React, { useState, useEffect } from "react";
import Screen from "./src/components/common/screen/Screen";
import AuthNavigator from "./src/components/navigation/authNavigator/AuthNavigator";
import WelcomeScreen from "./src/components/welcomeScreen/WelcomeScreen";
import ListingNavigator from "./src/components/navigation/listingNavigator/ListingNavigator";
import ListingsScreen from "./src/components/listingsScreen/ListingsScreen";

export default function App() {
  return <ListingNavigator />;
}
