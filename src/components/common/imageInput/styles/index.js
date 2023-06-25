import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

export const styles = StyleSheet.create({
  defaultImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  camera: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
  inputListContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
