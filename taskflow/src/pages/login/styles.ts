import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 30,
    backgroundColor: "#F4C27F80",
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
    height: 100,
  },

  boxImput: {
    width: "100%",
    height: 40,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    elevation: 10,
  },

  input: {
    flex: 1,
    height: "100%",
    borderRadius: 30,
  },

  boxBottom: {
    width: "100%",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CE8440",
    borderRadius: 30,
    elevation: 10,
  },

  textButton: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    color: "#FFFFFF",
    fontWeight: "semibold",
  },
});
