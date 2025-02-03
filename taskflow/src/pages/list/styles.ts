import { ScaleFromCenterAndroid } from "@react-navigation/stack/lib/typescript/commonjs/src/TransitionConfigs/TransitionPresets";
import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F4C27F99",
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: Dimensions.get("window").height / 6,
    padding: 30,
    justifyContent: "center",
  },
  saudacao: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 15,
    fontFamily: "PoppinsRegular",
    fontWeight: "semibold",
    color: "#fff",
  },
  boxInput: {
    width: "100%",
  },
  boxList: {
    flex: 1,
    width: "100%",
  },
  card: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15,
  },

  listCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
