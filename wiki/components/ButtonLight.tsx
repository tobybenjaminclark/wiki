import React from "react";
import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { useTheme } from "../ThemeProvider";
import { PaneLight } from "../components/PaneLight";

export interface ButtonLightProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

/* Clickable button using the light pane bevel. */
export const ButtonLight: React.FC<ButtonLightProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  const { colors } = useTheme();

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }] }>
      <PaneLight style={style}>
        <Text style={[{ color: colors.paneLightText, fontWeight: "bold", textAlign: "center" }, textStyle]}>
          {title}
        </Text>
      </PaneLight>
    </Pressable>
  );
};
