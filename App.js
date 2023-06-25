import React, { useState, useEffect } from "react";
import Screen from "./src/components/common/screen/Screen";
import ImageInput from "./src/components/common/imageInput/ImageInput";
import ImageInputList from "./src/components/common/imageInput/ImageInputList";
import ListingEditScreen from "./src/components/listingEditScreen/ListingEditScreen";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
