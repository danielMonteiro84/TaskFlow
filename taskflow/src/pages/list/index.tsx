import React, { useContext, useRef } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Flag } from "../../components/Flag";
import { AuthContextList } from "../../context/authContext_list";
import { Swipeable } from "react-native-gesture-handler";

export default function List() {
  const { taskList, handleDelete } =
    useContext<AuthContextType>(AuthContextList);
  const swipeableRefs = useRef([]);
  const renderRightActions = () => {
    return (
      <View style={style.buttom}>
        <AntDesign name="delete" size={25} color={"#fff"} />
      </View>
    );
  };

  const renderLeftActions = () => {
    return (
      <View style={style.buttomLeft}>
        <AntDesign name="edit" size={25} color={"#fff"} />
      </View>
    );
  };

  const handleSwipeOpen = (directions: "right" | "left", item, index) => {
    if (directions == "right") handleDelete(item);
    swipeableRefs.current[index]?.close();
  };

  const _listCard = (item: PropCard, index) => {
    const color = item.flag == "pendente" ? "red" : "blue";
    return (
      <Swipeable
        ref={(ref) => (swipeableRefs.current[index] = ref)}
        key={index}
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
        onSwipeableOpen={(directions) => handleSwipeOpen(directions, item)}
      >
        <View style={style.card}>
          <View style={style.listCard}>
            <View>
              <Text style={style.textCard}>{item.task}</Text>
              <Text style={style.descriptionCard}>{item.description}</Text>
            </View>
            <Flag caption={item.flag} color={color} />
          </View>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={style.tela}>
      <LinearGradient
        colors={["#F4C27F", "#D8605B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={style.header}>
          <Text style={style.saudacao}>
            Bom dia, <Text style={{ fontWeight: "bold" }}>Daniel </Text>{" "}
          </Text>
          <View style={style.boxInput}>
            <Input IconLeft={MaterialIcons} IconLeftName="search" />
          </View>
        </View>
      </LinearGradient>
      <View style={style.boxList}>
        <FlatList
          data={taskList}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => {
            return _listCard(item, index);
          }}
        />
      </View>
    </View>
  );
}
