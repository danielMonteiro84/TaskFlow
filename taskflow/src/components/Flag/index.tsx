import React from "react";
import { Text, View } from "react-native";
import { style } from "./styles";

type Props = {
  caption: string;
  color: string;
  selected?: boolean;
};

export function Flag({ ...rest }: Props) {
  return (
    <View
      style={[
        style.container,
        { backgroundColor: rest?.color },
        rest?.selected && { borderWidth: 2, borderColor: "#fff" },
      ]}
    >
      <Text style={style.caption}>{rest.caption}</Text>
    </View>
  );
}
