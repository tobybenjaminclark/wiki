import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { useTheme } from '../themes/ThemeContext'
import { darkTheme, lightTheme } from '../themes/themes'

type TextType = 'title' | 'paragraph'

type Props = TextProps & {
  children: React.ReactNode
  type?: TextType
}

export default function ChangaText({ children, type = 'paragraph', style, ...props }: Props) {
  const { theme } = useTheme()
  const colors = theme === 'light' ? lightTheme : darkTheme

  const fontSize = type === 'title' ? 35 : 20
  const fontWeight = type === 'title' ? 'bold' : 'normal'
  const color = theme === 'light' ? '#4C5F58' : colors.text

  // Add reduced lineHeight only for paragraph
  const lineHeight = type === 'paragraph' ? 22 : undefined

  return (
    <Text
      style={[styles.text, { fontSize, fontWeight, color, lineHeight }, style]}
      {...props}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Changa',
  },
})
