import React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { theme } from "@/theme";

interface PaneProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}


// Empty Pane Component
const Pane: React.FC<PaneProps> = ({ children, style }) => {
  return (
    <View style={[styles.pane, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  pane: {
    width: "100%",

    // Use theme colors
    backgroundColor: theme.colors.paneBackground,

    // Top/Left stroke (lighter)
    borderTopWidth: 4,
    borderTopColor: theme.colors.paneHighlight,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.paneHighlight,

    // Bottom/Right stroke (darker)
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.paneShadow,
    borderRightWidth: 4,
    borderRightColor: theme.colors.paneShadow,

    // Center content
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
});

export default Pane;