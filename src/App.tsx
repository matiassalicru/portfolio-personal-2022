// Libraries
import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import { Home } from './containers/Home/Home'
import { About } from './sections/AboutSection/About/About'

// Styled-components
import GlobalCSS from './global.css'
import { ThemeProvider } from 'styled-components'

// Context
import { ThemeContext } from './context/ThemeContext/Context'

export const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
