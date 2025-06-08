import React, { createContext, useContext, useEffect, useState } from "react";
import { Platform } from "react-native";

/* Theme identifiers. */
export type ThemeName = "green" | "blue";

/* Colour values for dark and light panes. */
export interface ColourScheme {
  pane: string; /* Background colour of a normal pane. */
  paneBorderLight: string; /* Highlight on top‑left edges. */
  paneBorderDark: string; /* Shadow on bottom‑right edges. */
  text: string; /* Default text colour. */

  paneLight: string; /* Background colour of a light pane. */
  paneLightBorderLight: string; /* Highlight on top‑left edges (light pane). */
  paneLightBorderDark: string; /* Shadow on bottom‑right edges (light pane). */
  paneLightText: string; /* Text colour inside a light pane. */
}

const palettes: Record<ThemeName, ColourScheme> = {
  green: {
    pane: "#9DCBBA",
    paneBorderLight: "#C3E5D8",
    paneBorderDark: "#6AA28D",
    text: "#1E1E1E",

    paneLight: "#C8EEE0",
    paneLightBorderLight: "#E1FEF3",
    paneLightBorderDark: "#9EC9BB",
    paneLightText: "#4C5F58",
  },
  blue: {
    pane: "#9DC5E4",
    paneBorderLight: "#C2E1FF",
    paneBorderDark: "#5A9AC1",
    text: "#1E1E1E",

    paneLight: "#C8EEE0",
    paneLightBorderLight: "#E1FEF3",
    paneLightBorderDark: "#9EC9BB",
    paneLightText: "#4C5F58",
  },
};

/* Theme context. */
interface ThemeContextValue {
  name: ThemeName; /* Current theme name. */
  colors: ColourScheme; /* Active colour set. */
  toggle: () => void; /* Switch between themes. */
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/* Provider component. */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<ThemeName>("green");

  const toggle = () => setName(prev => (prev === "green" ? "blue" : "green"));

  /* Press 'p' on web to toggle the palette. */
  useEffect(() => {
    if (Platform.OS !== "web") return;
    const handle = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "p") toggle();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  const value: ThemeContextValue = { name, colors: palettes[name], toggle };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/* Hook to access theme context. */
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside a ThemeProvider.");
  return ctx;
};