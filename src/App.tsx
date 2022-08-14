// Libraries
import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import { Home } from './containers/Home/Home'
import { About } from './sections/AboutSection/About/About'
import { SCFixedButtons, SCThemeButton } from './styles'

// Styled-components
import GlobalCSS from './global.css'
import { ThemeProvider } from 'styled-components'

// Context
import { ThemeContext } from './context/ThemeContext/Context'

// Constants
import { DARK } from './context/ThemeContext/constants'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export const App = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
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
      </SCFixedButtons>
    </ThemeProvider>
  )
}
