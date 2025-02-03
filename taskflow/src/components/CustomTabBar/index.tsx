import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import {
  AntDesign,
  FontAwesome,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default ({ state, navigation }: any) => {
  return (
    <View style={style.tabArea}>
      <TouchableOpacity style={style.tabItem}>
        <AntDesign name="bars" style={{ fontSize: 32 }} />
      </TouchableOpacity>
      <TouchableOpacity>
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
      <TouchableOpacity style={style.tabItem}>
        <FontAwesome name="user" style={{ fontSize: 32 }} />
      </TouchableOpacity>
    </View>
  );
};
