import { createContext, useEffect, useState } from 'react'
import { DARK, DARK_THEME, LIGHT_THEME } from './constants'
import { ThemeTypes, ContextTypes } from './types'

export const ThemeContext = createContext<ContextTypes>({})

export const ThemeProviderContext = ({ children }: any) => {
  const storage = localStorage.getItem('theme')
  const localTheme = storage && JSON.parse(storage)
  const [theme, setTheme] = useState<ThemeTypes>(localTheme || DARK_THEME)

  const changeTheme = () => {
    setTheme((prevTheme): ThemeTypes => {
      return prevTheme.theme === DARK ? LIGHT_THEME : DARK_THEME
    })
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
