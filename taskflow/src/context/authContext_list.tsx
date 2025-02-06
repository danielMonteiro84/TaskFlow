import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
  { caption: "Pendente", color: "#fd7e14" },
  { caption: "Concluído", color: "#28a745" },
];

export const AuthProviderList = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("Pendente");
  const [item, setItem] = useState(0);
  const [taskList, setTaskList] = useState([]);

  const onOpen = () => {
    modalizeRef?.current?.open();
  };

  const onClose = () => {
    modalizeRef?.current?.close();
  };

  useEffect(() => {
    checkAndFetchTasks();
  }, []);

  async function checkAndFetchTasks() {
    try {
      const storageData = await AsyncStorage.getItem("taskList");
      const tasks = storageData ? JSON.parse(storageData) : [];

      if (tasks.length === 0) {
        await fetchTasksFromAPI();
      } else {
        setTaskList(tasks);
      }
    } catch (error) {
      console.log("Erro ao carregar tarefas!", error);
    }
  }

  async function fetchTasksFromAPI() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );

      const data = await response.json();

      const formattedTasks = data.map((task) => ({
        item: task.id,
        task:
          task.title.length > 10
            ? task.title.substring(0, 25) + "..."
            : task.title,
        description: "Descrição vinda da API",
        flag: task.completed ? "Concluído" : "Pendente",
      }));

      await AsyncStorage.setItem("taskList", JSON.stringify(formattedTasks));
      setTaskList(formattedTasks);
    } catch (error) {
      console.log("Erro ao buscar tarefas da API:", error);
    }
  }

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
    if (!task || !description || !selectedFlag) {
      return Alert.alert("Atenção", "Preencha todos os campos!");
    }
    try {
      const newTask = {
        item: item !== 0 ? item : Date.now(),
        task,
        description,
        flag: selectedFlag || "Pendente",
      };

      let taskListCopy = [...taskList];
      const itemIndex = taskListCopy.findIndex(
        (task) => task.item === newTask.item
      );

      if (itemIndex >= 0) {
        taskListCopy[itemIndex] = newTask;
      } else {
        taskListCopy.push(newTask);
      }

      await AsyncStorage.setItem("taskList", JSON.stringify(taskListCopy));
      setTaskList(taskListCopy);
      setData();
      onClose();
    } catch (error) {
      console.log("Erro ao salvar o item", error);
    }
  };
  const setData = () => {
    setTask("");
    setDescription("");
    setSelectedFlag("Pendente");
    setItem(0);
  };

  const handleDelete = async (itemToDelete) => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir esta tarefa?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              const updatedTaskList = taskList.filter(
                (t) => t.item !== itemToDelete.item
              );

              await AsyncStorage.setItem(
                "taskList",
                JSON.stringify(updatedTaskList)
              );
              setTaskList(updatedTaskList);
            } catch (error) {
              console.log("Erro ao excluir a tarefa", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };
  const handleEdit = async (itemToEdit: PropCard) => {
    try {
      setTask(itemToEdit.task);
      setDescription(itemToEdit.description);
      setItem(itemToEdit.item);
      setSelectedFlag(itemToEdit.flag);
      onOpen();
    } catch (error) {
      console.log("Erro ao editar", error);
    }
  };

  const _container = () => {
    return (
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={style.header}>
          <TouchableOpacity onPress={() => onClose()}>
            <AntDesign name="closecircle" size={30} color="#ff4d4f" />
          </TouchableOpacity>
          <Text style={style.title}>Criar Tarefa</Text>
          <TouchableOpacity onPress={() => handleSave()}>
            <AntDesign name="checkcircle" size={30} color="#1890ff" />
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
    <AuthContextList.Provider
      value={{
        onOpen,
        taskList,
        handleDelete,
        handleEdit,
        setDescription,
        setTask,
        setSelectedFlag,
      }}
    >
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
