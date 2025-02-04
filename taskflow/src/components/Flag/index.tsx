import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

type Props = {
  caption: string;
  color: string;
  selected?: boolean;
};

export function Flag({ ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[style.container, { backgroundColor: rest?.color }]}
    >
      <Text style={{ color: "#fff" }}>{rest.caption}</Text>
    </TouchableOpacity>
  );
}
