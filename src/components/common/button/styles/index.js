import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../../../constants";
export const styles = (primary) => {
  return StyleSheet.create({
    container: {
      backgroundColor: primary ? primaryColor : secondaryColor,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 32,
      height: 50,
    },
    text: {
      color: "white",
      fontWeight: 700,
      fontSize: 18,
    },
  });
};
