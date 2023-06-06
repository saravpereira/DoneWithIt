import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { View, Image, Text, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import colors from "../../../constants/colors";

const ListItem = ({
  avatar,
  title,
  description,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.userDetail}>
            <Image style={styles.avatar} source={avatar} />
            <View style={styles.titleAndDescription}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;
