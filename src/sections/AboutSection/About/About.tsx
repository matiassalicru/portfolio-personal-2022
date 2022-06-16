// Components
import { useEffect, useState } from 'react'
import { Alert } from '../../../components/Alert/Alert'
import { NavBar } from '../../../components/NavBar/NavBar'
import { SCText } from '../styles'

// Styles
import {
  SCAboutContainer,
  SCParagraph,
  SCTitle,
  SCTextWrapper,
  SCImg,
} from './styles'

// Assets
import meSit from '../../../lotties/sit.jpg'

export const About = () => {
  const [showAlert, setShowAlert] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, 1500)
  }, [])
  return (
    <>
      <NavBar showNavList={false} />
      <SCAboutContainer>
        <SCTextWrapper>
          <SCTitle>Hola!</SCTitle>
          <SCParagraph>
            My name is Matias and I'm from Córdoba, Argentina, I'm a frontend
            developer who is passioned about technology, I'm always curious
            about the lastest tech thing including smartphones, videogames, PC
            hardware, etc. I have a mindset of never stop learning so I'm always
            doing some courses (actually learning web3 - blockchain develoment
            ⛓). I like reading, and I have a Cat named Sam 🐈 (she's almost
            always on camera behind me).
          </SCParagraph>
        </SCTextWrapper>
        {showAlert && <Alert time={1.5} text='This is me! :D' />}
        <SCImg src={meSit} />
      </SCAboutContainer>
    </>
  )
}
