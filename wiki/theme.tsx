export const theme = {
  colors: {
    // Pane colors (existing)
    paneBackground: "#9BC2D8",
    paneHighlight: "#B9DCF0",
    paneShadow: "#6E8EA5",

    paneLightBackground: "#B9E6FF",          // Default background
    paneLightHighlight: "#D7F1FF",           // Top/Left stroke
    paneLightShadow: "#81CFF2",              // Bottom/Right stroke (darker)

    // ButtonLight colors (existing)
    buttonLightBackground: "#B9E6FF",        // Default background
    buttonLightHighlight: "#D7F1FF",         // Top/Left stroke
    buttonLightShadow: "#81CFF2",            // Bottom/Right stroke (darker)
    buttonLightBackgroundHover: "#CCEEFF",   // Slightly lighter on hover
    buttonLightBackgroundPressed: "#9FD5F0", // Darker on press
    buttonLightBackgroundDisabled : "#B9E6FF", 

    // ButtonDark colors (existing)
    buttonDarkBackground: "#9BC2D8",         // Default background same as paneBackground
    buttonDarkHighlight: "#B9DCF0",          // Highlight same as paneHighlight
    buttonDarkShadow: "#6E8EA5",             // Shadow same as paneShadow
    buttonDarkBackgroundHover: "#A5CBE2",    // Slightly lighter shade for hover
    buttonDarkBackgroundPressed: "#7F9FB4",  // Darker shade for pressed state

    // ButtonGreen colors (new)
    buttonGreenBackground: "#BFE4C3",        // Default background
    buttonGreenHighlight: "#D5EDD9",         // Top/Left stroke (slightly lighter)
    buttonGreenShadow: "#92BA99",            // Bottom/Right stroke (darker)
    buttonGreenBackgroundHover: "#CDEACF",   // Lighter on hover
    buttonGreenBackgroundPressed: "#A2CBA8", // Darker on press

    // ButtonRed colors (new)
    buttonRedBackground: "#E0A1A1",          // Default background
    buttonRedHighlight: "#F5D9D9",           // Top/Left stroke (lighter)
    buttonRedShadow: "#B27272",              // Bottom/Right stroke (darker)
    buttonRedBackgroundHover: "#E8B5B5",     // Lighter on hover
    buttonRedBackgroundPressed: "#C98989",   // Darker on press

    TextLineLight: "#CDEDFF",
    TextLineDark: "#B9E6FF",
  },
} as const;