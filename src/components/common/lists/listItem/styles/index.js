import { StyleSheet } from "react-native";
import colors from "../../../../../constants/colors";

export const styles = StyleSheet.create({
  userDetail: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "100%",
    alignItems: "center",
  },
  userRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    width: "100%",
    backgroundColor: colors.white,

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
