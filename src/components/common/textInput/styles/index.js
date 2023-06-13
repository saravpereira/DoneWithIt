import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

export const styles = StyleSheet.create({
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
});
