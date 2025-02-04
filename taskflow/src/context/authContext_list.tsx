import React, { createContext, useContext, useRef, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContextList: any = createContext({});

const flags = [
  { caption: "pendente ", color: "red" },
  { caption: "feito ", color: "blue" },
];

export const AuthProviderList = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("pendente");
  const [item, setItem] = useState(0);
  const [taskList, setTaskList] = useState([]);

  const onOpen = () => {
    modalizeRef?.current?.open();
  };

  const onClose = () => {
    modalizeRef?.current?.close();
  };

  const _renderFlags = () => {
    return flags.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setSelectedFlag(item.caption);
        }}
      >
        <Flag
          caption={item.caption}
          color={item.color}
          selected={item.caption == selectedFlag}
        />
      </TouchableOpacity>
    ));
  };

  const handleSave = async () => {
    if (!task || !description) {
      return Alert.alert("Atenção", "Preencha todos os campos!");
    }
    try {
      const newTask = {
        item: Date.now(),
        task,
        description,
        flags: selectedFlag,
      };
      const storageData = await AsyncStorage.getItem("taskList");
      let taskList = storageData ? JSON.parse(storageData) : [];

      taskList.push(newTask);
      await AsyncStorage.setItem("taskList", JSON.stringify(taskList));
      setTaskList(tasklist);
      setData();
      onClose();
    } catch (error) {
      console.log("Erro ao salvar o item", error);
    }
  };
  const setData = () => {
    setTask("");
    setDescription("");
    setSelectedFlag("pendente");
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
          <TouchableOpacity onPress={() => handleSave()}>
            <AntDesign name="check" size={30} />
          </TouchableOpacity>
        </View>
        <View style={style.content}>
          <Text style={style.text}>Tarefa</Text>
          <Input title="Tarefa" value={task} onChangeText={setTask} />
          <Text style={style.text}>Descrição</Text>
          <Input
            title="Descrição"
            height={150}
            multiline
            numberOfLines={7}
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />
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
