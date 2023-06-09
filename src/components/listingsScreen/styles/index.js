import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: "100%",
    height: "100%",
    padding: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
});
