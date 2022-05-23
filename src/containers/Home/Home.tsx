import { useEffect, useState } from 'react'

// Components
import { Alert } from '../../components/Alert/Alert'
import { BottomBar } from '../../components/BottomBar/BottomBar'
import { NavBar } from '../../components/NavBar/NavBar'
import { Title } from '../../components/Title/Title'
import { SectionContainer } from '../../containers/SectionContainer'

// Styles
import { SCContainer, SCAlertContainer } from './styles'

export const Home = () => {
  const [showAlert, setShowAlert] = useState(true)
 
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, 1500);
  })
  return (
    <SCContainer>
      <NavBar />
      <Title />
      <SectionContainer />
      <BottomBar />
      <SCAlertContainer>
        {showAlert && <Alert time={1.5} text="Let's explore!"/>}
      </SCAlertContainer>
    </SCContainer>
  )
}
