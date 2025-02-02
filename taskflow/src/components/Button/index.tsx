import React from "react";
import { TouchableHighlightProps, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";

type Props = TouchableHighlightProps & {
  text: string;
  onPress: () => void;
};

export function Button({ text, onPress }: Props) {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}
