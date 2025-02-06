import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";
import ProfilePicture from "../../assets/profile.png";
import LoginPicture from "../../assets/login.png";

export default function User() {
  return (
    <View style={style.container}>
      <View style={style.user}>
        <Image
          source={ProfilePicture}
          style={style.image}
          resizeMode="contain"
        />
        <Text style={style.text}>Usuário Logado</Text>
        <Text style={style.textUser}>@usuariologado</Text>
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={style.bottom}>
        <Image source={LoginPicture} style={style.image} resizeMode="contain" />
        <View style={style.boxBottom}></View>
      </View>
    </View>
  );
}
