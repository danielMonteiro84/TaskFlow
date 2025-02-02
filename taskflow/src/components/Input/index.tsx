import React, { forwardRef, Fragment, LegacyRef } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { style } from "./styles";

type IconComponent = React.ComponentType<
  | React.ComponentProps<typeof MaterialIcons>
  | React.ComponentProps<typeof FontAwesome>
  | React.ComponentProps<typeof Octicons>
>;

type Props = TextInputProps & {
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  placeholder?: string;
  IconLeftName?: string;
  IconRightName?: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
};

export const Input = forwardRef(
  (Props: Props, ref: LegacyRef<TextInput> | null) => {
    const {
      IconLeft,
      IconRight,
      placeholder,
      IconLeftName,
      IconRightName,
      onIconLeftPress,
      onIconRightPress,
      ...rest
    } = Props;

    const calculateSizeWidth = () => {
      if (IconLeft && IconRight) {
        return "80%";
      } else if (IconLeft || IconRight) {
        return "90%";
      } else {
        return "100%";
      }
    };

    return (
      <Fragment>
        <View style={style.boxInput}>
          {IconRight && IconRightName && (
            <TouchableOpacity onPress={onIconRightPress}>
              <IconRight
                name={IconRightName as any}
                size={20}
                color={"#000"}
                style={style.icon}
              />
            </TouchableOpacity>
          )}
          <TextInput
            style={[style.input, { width: calculateSizeWidth() }]}
            placeholder={placeholder}
            {...rest}
          />
          {IconLeft && IconLeftName && (
            <TouchableOpacity onPress={onIconLeftPress}>
              <IconLeft
                name={IconLeftName as any}
                size={20}
                color={"#000"}
                style={style.icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </Fragment>
    );
  }
);
