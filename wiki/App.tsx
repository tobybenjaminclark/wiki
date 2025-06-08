import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { ThemeProvider, useTheme } from "./ThemeProvider";
import { Pane } from "./components/Pane";

/* Root wrapper that supplies the active theme context. */
export default function App() {
  return (
    <ThemeProvider>
      <RootScreen />
    </ThemeProvider>
  );
}

/* Simple screen that shows one themed pane. */
function RootScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Pane>
        <Text style={{ color: colors.text }}>
          Welcome to Toby's Wiki, it's not ready yet sorry.
        </Text>
      </Pane>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
