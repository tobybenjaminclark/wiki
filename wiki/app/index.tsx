import React, { JSX } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { ThemeProvider, useTheme } from "../ThemeProvider";
import { PaneDark } from "../components/PaneDark";
import { ButtonLight } from "../components/ButtonLight";
import { INTRO_TEXT } from "../content/intro";

/* Shared width so every bevel aligns. */
const PANE_WIDTH = 500;

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <RootScreen />
    </ThemeProvider>
  );
}

function RootScreen(): JSX.Element {
  const { colors } = useTheme();

  /* full‑width light button (minus dark pane padding). */
  const fullButtonStyle = { width: "100%" } as const;

  /* half‑width buddies that butt up to each other. */
  const halfButtonStyle = { flex: 1 } as const;

  return (
    <View style={styles.container}>
      {/* Name header */}
      <PaneDark style={styles.headerPane}>
        <Text style={[styles.headerText, { color: colors.text }]}>Toby Benjamin Clark</Text>
      </PaneDark>

      {/* Blurb + buttons in one dark pane */}
      <PaneDark style={styles.bodyPane}>
        <Text style={[styles.bodyText, { color: colors.text }]}>{INTRO_TEXT}</Text>

        {/* primary buttons */}
        <View style={styles.vGap} />
        <ButtonLight title="Projects & Hackathons" style={fullButtonStyle} />
        <View style={styles.vGapSmall} />
        <ButtonLight title="Academic Endeavours" style={fullButtonStyle} />

        {/* separator line */}
        <View style={[styles.separator, { backgroundColor: colors.paneBorderDark }]} />

        {/* secondary buttons rows */}
        <View style={styles.row}>
          <ButtonLight title="Github Profile" style={halfButtonStyle} />
          <ButtonLight title="LinkedIn Profile" style={halfButtonStyle} />
        </View>
        <View style={styles.row}>
          <ButtonLight title="CV File" style={halfButtonStyle} />
          <ButtonLight title="Contact Me" style={halfButtonStyle} />
        </View>
      </PaneDark>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  headerPane: {
    width: PANE_WIDTH,
    marginBottom: 16,
  },
  bodyPane: {
    width: PANE_WIDTH,
    padding: 16,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4,
  },
  vGap: { height: 16 },
  vGapSmall: { height: 12 },
  separator: {
    height: 2,
    alignSelf: "stretch",
    marginVertical: 16,
  },
  row: {
    flexDirection: "row",
    marginTop: 12,
    width: "100%"
  },
  hGap: { width: 8 },
});