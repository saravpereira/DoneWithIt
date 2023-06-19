import React from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import defaultStyles from "../../../constants/styles";

const AppTextInput = ({ icon, width="100%", ...otherProps }) => {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        {...otherProps}
        placeholderTextColor={defaultStyles.colors.medium}
      />
    </View>
  );
};

export default AppTextInput;
