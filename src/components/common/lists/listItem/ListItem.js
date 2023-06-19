import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { View, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import colors from "../../../../constants/colors";
import AppText from "../../text/AppText";

const ListItem = ({
  avatar,
  title,
  description,
  onPress,
  renderRightActions,
  showChevron=false
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.userRow}>
             <View style={styles.userDetail}>
            {avatar}
            <View style={styles.titleAndDescription}>
              {title && <AppText style={styles.title} numberOfLines={1}>{title}</AppText>}
              {description && (
                <AppText style={styles.description} numberOfLines={1}>{description}</AppText>
              )}
            </View>
          </View>
          {
            showChevron && <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={colors.medium}
          />
          }
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;
