import React from "react";
import { styles } from "./styles";
import { View, Text, TouchableWithoutFeedback } from "react-native";

const AppButton = ({ color = "primary", text, onPress, style }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles(color === "primary").container, style]}>
        <Text style={styles(color === "primary").text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppButton;
