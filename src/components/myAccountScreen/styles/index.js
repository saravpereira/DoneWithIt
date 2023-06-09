import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: "100%",
    height: "100%",
  },
  section: {
    paddingBottom: 20,
  },
  userDetailSection: {
    paddingBottom: 30,
  },
  flatlist: {
    flexGrow: 0,
    paddingBottom: 20,
  },
  listingIconContainer: {
    width: 35,
    height: 35,
    backgroundColor: colors.primaryColor,
    borderRadius: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emailIconContainer: {
    width: 35,
    height: 35,
    backgroundColor: colors.secondaryColor,
    borderRadius: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutIconContainer: {
    width: 35,
    height: 35,
    backgroundColor: colors.yellow,
    borderRadius: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 32,
  },
});
