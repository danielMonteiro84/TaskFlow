import React, { useState } from "react";
import { Text, View, Image, Alert } from "react-native";
import { style } from "./styles";
import LoginPicture from "../../assets/login.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(true);

  async function getLogin() {
    try {
      if (!email || !senha) {
        return Alert.alert("Atenção", "Campos Obrigatórios");
      }
      navigation.reset({ routes: [{ name: "BottomRoutes" }] });
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
        <Input
          IconLeft={MaterialIcons}
          IconLeftName="email"
          placeholder="e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          IconLeft={Octicons}
          IconLeftName={showSenha ? "eye-closed" : "eye"}
          placeholder="senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={showSenha}
          onIconLeftPress={() => setShowSenha(!showSenha)}
        />
      </View>

      <View>
        <LinearGradient
          colors={["#F4C27F", "#D8605B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 30 }}
        >
          <Button text="Entrar" onPress={() => getLogin()} />
        </LinearGradient>
      </View>

      <Text style={style.textBottom}>
        Não tem conta? <Text style={{ color: "#CE8440" }}>Crie agora!</Text>
      </Text>
    </View>
  );
}
