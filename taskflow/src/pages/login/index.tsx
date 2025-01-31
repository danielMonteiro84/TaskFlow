import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { style } from "./styles";
import LoginPicture from "../../assets/login.png";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function getLogin() {
    try {
      if (!email || !senha) {
        return Alert.alert("Atenção", "Campos Obrigatórios");
      }
      Alert.alert("Bem vindo!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={LoginPicture} style={style.image} resizeMode="contain" />
        <Text style={style.text}>Bem-vindo à nossa lista de tarefas</Text>
      </View>
      <View style={style.boxMid}>
        <View style={style.boxImput}>
          <TextInput
            style={style.input}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
          />
          <MaterialIcons name="email" size={20} color={"#000000BF"} />
        </View>
        <View style={style.boxImput}>
          <TextInput
            style={style.input}
            placeholder="senha"
            onChangeText={setSenha}
          />
          <MaterialIcons name="remove-red-eye" size={20} color={"#000000BF"} />
        </View>
      </View>
      <LinearGradient
        colors={["#F4C27F", "#D8605B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={style.button}
      >
        <View style={style.boxBottom}>
          <TouchableOpacity style={style.button} onPress={() => getLogin()}>
            <Text style={style.textButton}>Entrar </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <Text style={style.textBottom}>
        Não tem conta? <Text style={{ color: "#CE8440" }}>Crie agora!</Text>
      </Text>
    </View>
  );
}
