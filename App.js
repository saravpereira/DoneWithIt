import React, { useState, useEffect } from "react";
import Screen from "./src/components/common/screen/Screen";
import AuthNavigator from "./src/components/navigation/authNavigator/AuthNavigator";
import AppNavigator from "./src/components/navigation/appNavigator/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
