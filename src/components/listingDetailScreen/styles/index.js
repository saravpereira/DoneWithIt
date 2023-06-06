import { StyleSheet } from "react-native";
import { secondaryColor } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "30%",
  },
  productDetailSection: {
    width: "100%",
    height: "10%",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    rowGap: 10,
  },
  pricing: {
    color: secondaryColor,
    fontWeight: 700,
    fontSize: 16,
  },
  title: {
    fontWeight: 500,
    fontSize: 16,
  },
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
  usernameAndListing: {
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
  },
  username: {
    fontSize: 14,
  },
  listings: {
    color: "gray",
    fontSize: 14,
  },
});
