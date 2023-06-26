import React, { useState, useEffect } from "react";
import Screen from "./src/components/common/screen/Screen";
import AuthNavigator from "./src/components/navigation/authNavigator/AuthNavigator";
import WelcomeScreen from "./src/components/welcomeScreen/WelcomeScreen";

export default function App() {
  return <AuthNavigator />;
}
