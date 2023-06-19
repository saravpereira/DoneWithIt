import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AppText from "../text/AppText";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles().textPickerItem}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
