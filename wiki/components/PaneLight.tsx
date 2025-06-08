import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "../ThemeProvider";

/* Pane with the lighter colour variant. */
export const PaneLight: React.FC<{ children?: React.ReactNode; style?: StyleProp<ViewStyle> }> = ({ children, style }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: colors.paneLight,
          padding: 12,
          borderTopWidth: 4,
          borderLeftWidth: 4,
          borderRightWidth: 4,
          borderBottomWidth: 4,
          borderTopColor: colors.paneLightBorderLight,
          borderLeftColor: colors.paneLightBorderLight,
          borderRightColor: colors.paneLightBorderDark,
          borderBottomColor: colors.paneLightBorderDark,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
