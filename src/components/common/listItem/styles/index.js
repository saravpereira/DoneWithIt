import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userDetail: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    padding: 10,
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
  },
  description: {
    color: "gray",
    fontSize: 14,
  },
});
