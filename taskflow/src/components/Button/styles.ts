import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  button: {
    width: 315,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
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
});
