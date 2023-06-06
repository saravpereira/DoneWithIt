import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";

const Button = ({ color = "primary", text }) => {
  return (
    <View style={styles(color === "primary").container}>
      <Text style={styles(color === "primary").text}>{text}</Text>
    </View>
  );
};

export default Button;
