import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { ImageBackground, View } from 'react-native'
import { ThemeProvider } from '../assets/themes/ThemeContext'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Changa: require('../assets/fonts/Changa-Regular.ttf'),
  })

  if (!fontsLoaded) return null

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{width: '100%', height: '100%'}}
    > 
    <ThemeProvider>
          <View>
            <Stack screenOptions={{ headerShown: false }} />
          </View>
    </ThemeProvider>
    </ImageBackground>
  )
}
