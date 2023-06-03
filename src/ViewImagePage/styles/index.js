import { StyleSheet, Platform, StatusBar } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  buttonContainer: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
  headerContiner: {
    position: "absolute",
    width: "100%",
    height: "20%",
    flexDirection: "column",
    backgroundColor: "black",
  },
  deny: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
  },
  accept: {
    width: 50,
    height: 50,
    backgroundColor: "#4ECDC4",
  },
});
