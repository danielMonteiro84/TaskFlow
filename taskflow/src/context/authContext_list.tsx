import React, { createContext, useContext, useRef } from "react";
import { Alert, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { style } from "./styles";
import { Input } from "../components/Input";

export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef?.current?.open();
  };

  const _container = () => {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <TouchableOpacity>
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
          <View style={{ width: "40%" }}>
            <Text style={style.text}>Data Limite</Text>
            <Input />
          </View>
          <View style={style.flag}></View>
        </View>
      </View>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        childrenStyle={{ height: Dimensions.get("window").height / 1.3 }}
        adjustToContentHeight={true}
      >
        {_container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);
