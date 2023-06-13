import React, { useState } from "react";
import WelcomeScreen from "./src/components/welcomeScreen/WelcomeScreen";
import ViewImageScreen from "./src/components/viewImageScreen/ViewImageScreen";
import { View, Text } from "react-native";
import Card from "./src/components/common/card/Card";
import ListingDetailScreen from "./src/components/listingDetailScreen/ListingDetailScreen";
import Screen from "./src/components/common/screen/Screen";
import MessagesScreen from "./src/components/messagesScreen/MessagesScreen";
import MyAccountScreen from "./src/components/myAccountScreen/MyAccountScreen";
import ListingsScreen from "./src/components/listingsScreen/ListingsScreen";
import AppTextInput from "./src/components/common/textInput/AppTextInput";
import AppPicker from "./src/components/common/picker/AppPicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default function App() {
  const [category, setSelectedCategory] = useState(null);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectedItem={setSelectedCategory}
        placeholder="Category"
        icon="apps"
        items={categories}
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
