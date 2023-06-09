import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

export const styles = StyleSheet.create({
  userDetail: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 32,
  },
  titleAndDescription: {
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
  },
  description: {
    color: "gray",
    fontSize: 14,
  },
});
