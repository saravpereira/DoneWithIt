import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { View, Text, TouchableHighlight } from "react-native";
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
            {avatar}
            <View style={styles.titleAndDescription}>
              {title && <Text style={styles.title}>{title}</Text>}
              {description && (
                <Text style={styles.description}>{description}</Text>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;
