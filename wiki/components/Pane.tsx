import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "../ThemeProvider";

/* Pane with bevelled edges. */
export const Pane: React.FC<{ children?: React.ReactNode; style?: StyleProp<ViewStyle> }> = ({ children, style }) => {
  const { colors } = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: colors.pane,
          padding: 12,
          borderTopWidth: 4,
          borderLeftWidth: 4,
          borderRightWidth: 4,
          borderBottomWidth: 4,
          borderTopColor: colors.paneBorderLight,
          borderLeftColor: colors.paneBorderLight,
          borderRightColor: colors.paneBorderDark,
          borderBottomColor: colors.paneBorderDark,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
