import React from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "./Icon";
import AppText from "../text/AppText";


const CategoryPickerItem = ({item, onPress }) => {
  return (
    <TouchableOpacity style={styles().categoryPickerContainer} onPress={onPress}>
    <Icon backgroundColor={item.backgroundColor} name={item.icon} size={60}/>
    <View style={styles().label}>
        <AppText>{item.label}</AppText>
    </View>

    </TouchableOpacity>
    
   
  );
};

export default CategoryPickerItem;
