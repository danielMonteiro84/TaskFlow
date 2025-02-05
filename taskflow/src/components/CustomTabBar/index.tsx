import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import {
  AntDesign,
  FontAwesome,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContextList } from "../../context/authContext_list";

export default ({ state, navigation }: any) => {
  const { onOpen, setDescription, setTask, setSelectedFlag } =
    useContext<any>(AuthContextList);

  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={style.tabArea}>
      <TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
        <AntDesign
          name="bars"
          style={{
            opacity: state.index === 0 ? 1 : 0.3,
            color: "#D8605B",
            fontSize: 32,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setDescription("");
          setTask("");
          setSelectedFlag("Pendente");
          onOpen();
        }}
      >
        <LinearGradient colors={["#F4C27F", "#D8605B"]} style={style.tabButton}>
          <View style={{ width: "100%", left: 7, top: 4 }}>
            <Entypo name="plus" size={40} color={"#fff"} />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              right: 7,
              bottom: 10,
            }}
          >
            <MaterialIcons name="edit" size={30} color={"#fff"} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
        <FontAwesome
          name="user"
          style={{
            opacity: state.index === 1 ? 1 : 0.3,
            color: "#D8605B",
            fontSize: 32,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
