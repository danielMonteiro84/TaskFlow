import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#F4C27F99",
  },
  header: {
    width: "100%",
    height: 50,
    paddingHorizontal: 40,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "PoppinsRegular",
  },
  text: {
    marginLeft: 20,
    fontFamily: "PoppinsRegular",
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
    gap: 10,
  },
  containerFlag: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
});
