// Libraries
import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import { Home } from './containers/Home/Home'
import { About } from './sections/AboutSection/About/About'

// Styled-components
import GlobalCSS from './global.css'
import { ThemeProvider } from 'styled-components'
import { SCFixedButtons, SCThemeButton } from './styles'

// Context
import { ThemeContext } from './context/ThemeContext/Context'

// Constants
import { DARK } from './context/ThemeContext/constants'
import { ENG_LANG, ESP_LANG } from './lang/constants'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCloudSun,
  faGlobeAmericas,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export const App = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
  const { i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === ENG_LANG ? ESP_LANG : ENG_LANG)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <SCFixedButtons>
        <SCThemeButton onClick={changeTheme} type='button'>
          <FontAwesomeIcon
            icon={theme?.theme === DARK ? faCloudSun : faMoon}
            size='lg'
          />
        </SCThemeButton>
        <SCThemeButton onClick={changeLanguage} type='button'>
          <FontAwesomeIcon icon={faGlobeAmericas} size='lg' />
        </SCThemeButton>
      </SCFixedButtons>
    </ThemeProvider>
  )
}
