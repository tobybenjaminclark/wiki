import React from 'react'
import { Pressable, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { useTheme } from '../themes/ThemeContext'
import { darkTheme, lightTheme } from '../themes/themes'
import ChangaText from './ChangaText'

type Props = {
  title: string
  onPress?: () => void
  style?: ViewStyle
  textStyle?: TextStyle
  preset?: 'green' | 'blue' | 'red' | 'yellow' | 'pink' | 'lightBlue' // add preset prop
}

export default function ThemedButton({ title, onPress, style, textStyle, preset = 'blue' }: Props) {
  const { theme } = useTheme()
  const colors = theme === 'light' ? lightTheme : darkTheme

  // Build the color keys dynamically based on preset
  const backgroundColor = colors[`${preset}PaneBackground`]
  const borderHighlight = colors[`${preset}PaneBorderHighlight`]
  const borderShadow = colors[`${preset}PaneBorderShadow`]

  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.base,
          {
            backgroundColor,
            borderTopColor: borderHighlight,
            borderLeftColor: borderHighlight,
            borderBottomColor: borderShadow,
            borderRightColor: borderShadow,
          },
          style,
        ]}
      >
        <ChangaText style={[styles.text, { color: colors.text }, textStyle]}>{title}</ChangaText>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  base: {
    padding: 5,
    borderTopWidth: 6,
    borderLeftWidth: 6,
    borderBottomWidth: 8,
    borderRightWidth: 8,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})
