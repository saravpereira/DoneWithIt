import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

export const styles = (placeholder) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.light,
      borderRadius: 25,
      flexDirection: "row",
      width: "100%",
      padding: 15,
      marginVertical: 10,
      alignItems: "center",
      gap: 5,
    },
    text: {
      flex: 1,
      color: placeholder ? colors.medium : colors.black,
    },
    textPickerItem: {
      padding: 20,
    },
  });
};
