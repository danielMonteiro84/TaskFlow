import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4C27F99",
  },
  text: {
    fontWeight: "bold",
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    fontSize: 16,
  },

  textUser: {
    fontWeight: "semibold",
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    fontSize: 12,
    color: "#D8605B",
  },

  button: {
    width: 89,
    height: 22,
    marginTop: 10,
    backgroundColor: "#F4C27F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 10,
  },
  textButton: {
    fontWeight: "bold",
    fontFamily: "PoppinsRegular",
    textAlign: "center",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#D8605B",
    backgroundColor: "#fff",
  },
  user: {
    width: "100%",
    height: "40%",
    backgroundColor: "#F4C27F99",
    alignItems: "center",
    justifyContent: "center",
  },

  bottom: {
    width: "100%",
    height: "65%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },

  boxBottom: {
    width: "75%",
    height: "60%",
    borderWidth: 1,
    borderRadius: 24,
    marginTop: 20,
    elevation: 8,
    backgroundColor: "#fff",
  },
});
