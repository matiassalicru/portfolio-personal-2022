export interface ThemeTypes {
  color: string
  theme: string
  accentColor: string
  backgroundColor: string
  backgroundSecondaryColor: string
}

export interface ContextTypes {
  theme?: ThemeTypes
  changeTheme?: () => void
}
