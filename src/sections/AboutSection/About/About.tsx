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
            <hr />
            Hola! Soy desarrollador front-end y eterno estudiante de internet y
            apasionado por la tecnología, tengo experiencia trabajando en
            equipos de producto, más de 2 años de experiencia trabajando en
            aplicaciones SaaS, utilizando distintas tecnologías de front-end y
            últimamente estoy formandome como desarrollador web3, con
            tecnologías relacionadas con blockchain y solidity como lenguage de
            preferencia. También tengo una gata llamada Sam que aparece mucho en
            las meetings 😹
          </SCParagraph>
        </SCTextWrapper>
        {showAlert && <Alert time={1.5} text='This is me! :D' />}
        <SCImg src={meSit} />
      </SCAboutContainer>
    </>
  )
}
