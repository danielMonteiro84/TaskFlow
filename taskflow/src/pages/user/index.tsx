import React from "react";
import { Text, View, Image } from "react-native";
import { style } from "./styles";
import LoginPicture from "../../assets/profilepicture.png";

export default function User() {
  return (
    <View style={style.tela}>
      <View style={style.user}></View>
      <Image source={LoginPicture} style={style.image} resizeMode="contain" />

      <View style={style.bottom}>
        <Text>User </Text>
      </View>
    </View>
  );
}
