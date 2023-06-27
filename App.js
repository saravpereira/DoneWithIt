import React, { useState, useEffect } from "react";
import Screen from "./src/components/common/screen/Screen";
import AuthNavigator from "./src/components/navigation/authNavigator/AuthNavigator";
import AppNavigator from "./src/components/navigation/appNavigator/AppNavigator";
import ListingsScreen from "./src/components/listingsScreen/ListingsScreen";

export default function App() {
  return <AuthNavigator />;
}
