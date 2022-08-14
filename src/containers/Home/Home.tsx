import { useContext, useEffect, useState } from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import { Alert } from '../../components/Alert/Alert'
import { BottomBar } from '../../components/BottomBar/BottomBar'
import { NavBar } from '../../components/NavBar/NavBar'
import { Title } from '../../components/Title/Title'
import { SectionContainer } from '../../containers/SectionContainer'
import { DARK } from '../../context/ThemeContext/constants'

// Styles
import {
  SCContainer,
  SCAlertContainer,
  SCThemeButton,
  SCFixedButtons,
} from './styles'

// Context
import { ThemeContext } from '../../context/ThemeContext/Context'

// Icons
import { faMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  const [showAlert, setShowAlert] = useState(true)
  const { theme, changeTheme } = useContext(ThemeContext)

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, 2500)
  }, [])

  const windowWidth = window.innerWidth

  return (
    <SCContainer>
      <NavBar />
      <Title />
      <SectionContainer />
      <BottomBar />
      <SCAlertContainer>
        {showAlert && <Alert time={2.5} text="Let's explore!" />}
      </SCAlertContainer>
    </SCContainer>
  )
}
