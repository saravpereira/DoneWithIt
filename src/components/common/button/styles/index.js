import { StyleSheet } from "react-native";
export const styles = (primary) => {
  return StyleSheet.create({
    container: {
      backgroundColor: primary ? "#fc5c65" : "#4ECDC4",
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
