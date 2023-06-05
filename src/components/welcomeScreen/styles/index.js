import { StyleSheet, Platform, StatusBar } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoImgContainer: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textContainer: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
  },
  text: {
    fontWeight: 700,
    fontSize: 24,
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    position: "absolute",
    width: "100%",
    height: "50%",
    flexDirection: "column",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  },
});
