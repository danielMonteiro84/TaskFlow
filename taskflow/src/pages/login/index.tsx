import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import LoginPicture from "../../assets/login.png";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={LoginPicture} style={style.image} resizeMode="contain" />
        <Text style={style.text}>Bem-vindo à nossa lista de tarefas</Text>
      </View>
      <View style={style.boxMid}>
        <View style={style.boxImput}>
          <TextInput style={style.input} placeholder="email" />
          <MaterialIcons name="email" size={20} color={"#000000BF"} />
        </View>
        <View style={style.boxImput}>
          <TextInput style={style.input} placeholder="senha" />
          <MaterialIcons name="remove-red-eye" size={20} color={"#000000BF"} />
        </View>
      </View>

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Entrar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
