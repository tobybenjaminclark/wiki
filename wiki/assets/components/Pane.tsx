import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { useTheme } from '../themes/ThemeContext'
import { darkTheme, lightTheme } from '../themes/themes'

type Preset = 'green' | 'blue' | 'red' | 'yellow' | 'pink' | 'lightBlue'

type PaneProps = ViewProps & {
  children: React.ReactNode
  preset?: Preset
}

export default function Pane({ children, style, preset, ...props }: PaneProps) {
  const { theme } = useTheme()
  const colors = theme === 'light' ? lightTheme : darkTheme

  // If no preset, fallback to default pane colors
  if (!preset) {
    return (
      <View
        style={[
          styles.base,
          {
            backgroundColor: colors.paneBackground,
            borderTopColor: colors.paneBorderHighlight,
            borderLeftColor: colors.paneBorderHighlight,
            borderBottomColor: colors.paneBorderShadow,
            borderRightColor: colors.paneBorderShadow,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </View>
    )
  }

  // Dynamic keys
  const backgroundColor = colors[`${preset}PaneBackground`]
  const borderTopColor = colors[`${preset}PaneBorderHighlight`]
  const borderLeftColor = colors[`${preset}PaneBorderHighlight`]
  const borderBottomColor = colors[`${preset}PaneBorderShadow`]
  const borderRightColor = colors[`${preset}PaneBorderShadow`]

  return (
    <View
      style={[
        styles.base,
        {
          backgroundColor,
          borderTopColor,
          borderLeftColor,
          borderBottomColor,
          borderRightColor,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    padding: 16,
    borderTopWidth: 8,
    borderLeftWidth: 8,
    borderBottomWidth: 8,
    borderRightWidth: 8,
  },
})
