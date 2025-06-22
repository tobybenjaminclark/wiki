// ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'
import { Appearance } from 'react-native'

type Theme = 'light' | 'dark'

const ThemeContext = createContext({
  theme: 'light' as Theme,
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = Appearance.getColorScheme() || 'light'
  const [theme, setTheme] = useState<Theme>(colorScheme)

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'p') {
        console.log('Pressed P — toggling theme')
        toggleTheme()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
