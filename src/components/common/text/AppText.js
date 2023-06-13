import React from "react";
import { Text } from "react-native";
import defaultStyles from "../../../constants/styles";

const AppText = ({ children, style }) => {
  return <Text style={[style, defaultStyles.text]}>{children}</Text>;
};

export default AppText;
