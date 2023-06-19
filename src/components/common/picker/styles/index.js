import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

export const styles = (placeholder) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.light,
      borderRadius: 25,
      flexDirection: "row",
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
    iconContainer: {
      width:80,
      height: 80,
      borderRadius: 45,
      justifyContent: "center",
      alignItems: "center"
    },
    categoryPickerContainer: {
      width:"33%",
      paddingHorizontal:30,
      paddingVertical:15,
      alignItems: "center"
    },
    label: {
      marginTop: 10,
      textAlign: "center"
    }
  });
};
