import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
export const styles = (primary) => {
  return StyleSheet.create({
    container: {
      backgroundColor: primary ? colors.primaryColor : colors.secondaryColor,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 32,
      height: 50,
      marginTop: 10,
    },
    text: {
      color: "white",
      fontWeight: 700,
      fontSize: 18,
    },
  });
};
