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

  boxImput: {
    width: "100%",
    height: 50,
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
    width: "auto",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 315,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    elevation: 5,
  },

  textButton: {
    fontSize: 22,
    fontFamily: "PoppinsRegular",
    color: "#FFFFFF",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  textBottom: {
    fontWeight: "semibold",
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
});
