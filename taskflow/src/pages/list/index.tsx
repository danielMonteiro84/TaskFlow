import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Flag } from "../../components/Flag";

type PropCard = {
  item: number;
  title: string;
  description: string;
  flag: "pendente" | "feito";
};

const data: Array<PropCard> = [
  {
    item: 0,
    title: "Realizar a lição de casa",
    description: "pagina 10 a 20",
    flag: "pendente",
  },

  {
    item: 1,
    title: "Passear com o cachorro",
    description: "Luck tem que passear as 17h",
    flag: "pendente",
  },

  {
    item: 2,
    title: "Roupas na custureira",
    description: "Roupas ficaram prontas dia 20",
    flag: "pendente",
  },
];

export default function List() {
  const _listCard = (item: PropCard) => {
    return (
      <TouchableOpacity style={style.card}>
        <View style={style.listCard}>
          <View>
            <Text style={style.textCard}>{item.title}</Text>
            <Text style={style.descriptionCard}>{item.description}</Text>
          </View>
          <Flag caption="Pendente " color={"#F44336"} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.tela}>
      <LinearGradient
        colors={["#F4C27F", "#D8605B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        //style={{ flex: 1 }}
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
          data={data}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => {
            return _listCard(item);
          }}
        />
      </View>
    </View>
  );
}
