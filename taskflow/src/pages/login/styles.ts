import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#F4C27F99",
    padding: 30,
  },
  boxTop: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 200,
  },

  text: {
    fontWeight: "semibold",
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
  },

  boxMid: {
    width: "95%",
    justifyContent: "space-around",
    flexDirection: "column",
    height: 150,
  },

  boxBottom: {
    width: "auto",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  textBottom: {
    fontWeight: "semibold",
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
});
