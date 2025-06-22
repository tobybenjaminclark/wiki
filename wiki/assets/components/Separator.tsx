import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { useTheme } from '../themes/ThemeContext'
import { darkTheme, lightTheme } from '../themes/themes'

type Props = {
  style?: ViewStyle
}

export default function Separator({ style }: Props) {
  const { theme } = useTheme()
  const colors = theme === 'light' ? lightTheme : darkTheme

  return <View style={[styles.separator, { backgroundColor: colors.separatorColor }, style]} />
}

const styles = StyleSheet.create({
  separator: {
    height: 4,
    borderRadius: 4,
    width: '100%',
  },
})
