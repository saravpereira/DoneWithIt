import { StyleSheet } from "react-native";
import { secondaryColor } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
    height: 300,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "70%",
    top: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  productDetailSection: {
    width: "100%",
    height: "30%",
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
});
