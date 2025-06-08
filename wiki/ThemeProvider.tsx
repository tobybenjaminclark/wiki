/* Save this file as ThemeProvider.tsx so the TypeScript compiler recognises the JSX below. */

import React, { createContext, useContext, useState, useEffect } from "react";
import { Platform, Pressable, StyleProp, ViewStyle } from "react-native";

/* Theme identifiers. */
export type ThemeName = "green" | "blue";

/* Colour values for a pane. */
export interface ColourScheme {
  pane: string; /* Main background colour. */
  paneBorderLight: string; /* Highlight colour on top‑left edges. */
  paneBorderDark: string; /* Shadow colour on bottom‑right edges. */
  text: string; /* Default text colour. */
}

/* Palettes keyed by theme name. */
const palettes: Record<ThemeName, ColourScheme> = {
  green: {
    pane: "#9DCBBA",
    paneBorderLight: "#C3E5D8",
    paneBorderDark: "#6AA28D",
    text: "#1E1E1E",
  },
  blue: {
    pane: "#9DC5E4",
    paneBorderLight: "#C2E1FF",
    paneBorderDark: "#5A9AC1",
    text: "#1E1E1E",
  },
};

/* Context value. */
interface ThemeContextValue {
  name: ThemeName;        /* Active theme name. */
  colors: ColourScheme;   /* Active colour set. */
  toggle: () => void;     /* Switch between themes. */
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/* Provide theme to the component tree. */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<ThemeName>("green");

  const toggle = () => setName(prev => (prev === "green" ? "blue" : "green"));

  /* Toggle on 'p' key‑press (web only). */
  useEffect(() => {
    if (Platform.OS !== "web") return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "p") toggle();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const value: ThemeContextValue = { name, colors: palettes[name], toggle };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/* Hook to access theme context. */
export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider.");
  return ctx;
};

