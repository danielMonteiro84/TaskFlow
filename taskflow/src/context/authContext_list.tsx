import React, { createContext, useContext, useRef } from "react";
import {
  Alert,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { style } from "./styles";
import { Input } from "../components/Input";
import { Flag } from "../components/Flag";

export const AuthContextList: any = createContext({});

const flags = [
  { caption: "pendente ", color: "red" },
  { caption: "feito ", color: "blue" },
];

export const AuthProviderList = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef?.current?.open();
  };

  const onClose = () => {
    modalizeRef?.current?.close();
  };

  const _renderFlags = () => {
    return flags.map((item, index) => (
      <TouchableOpacity key={index}>
        <Flag caption={item.caption} color={item.color} />
      </TouchableOpacity>
    ));
  };

  const _container = () => {
    return (
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={style.header}>
          <TouchableOpacity onPress={() => onClose()}>
            <MaterialIcons name="close" size={30} />
          </TouchableOpacity>
          <Text style={style.title}>Criar Tarefa</Text>
          <TouchableOpacity>
            <AntDesign name="check" size={30} />
          </TouchableOpacity>
        </View>
        <View style={style.content}>
          <Text style={style.text}>Tarefa</Text>
          <Input />
          <Text style={style.text}>Descrição</Text>
          <Input height={150} />
          <View style={style.containerFlag}>{_renderFlags()}</View>
        </View>
      </KeyboardAvoidingView>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        childrenStyle={{ height: Dimensions.get("window").height / 1.9 }}
        adjustToContentHeight={true}
      >
        {_container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);
