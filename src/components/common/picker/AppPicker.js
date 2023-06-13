import React, { useState } from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import defaultStyles from "../../../constants/styles";
import AppText from "../text/AppText";
import Screen from "../screen/Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemSelection = (item) => {
    setModalVisible(false);
    onSelectedItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => handleItemSelection(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;
