import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

const Icon = ({name, size, backgroundColor="black" }) => {
  return (
    <View style={[styles().iconContainer, {backgroundColor}]}>
        <MaterialCommunityIcons
              name={name}
              size={size}
              color="white"
            />
        </View>
  );
};

export default Icon;
