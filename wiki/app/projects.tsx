import { Text, View } from 'react-native'
import { useTheme } from '../assets/themes/ThemeContext'
import { darkTheme, lightTheme } from '../assets/themes/themes'

// This is the projects and hackathons page
export default function Projects() {
  const { theme } = useTheme()
  const colors = theme === 'light' ? lightTheme : darkTheme

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ color: colors.text, fontSize: 24 }}>Welcome to Projects</Text>
    </View>
  )
}
