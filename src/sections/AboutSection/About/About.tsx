// Components
import { useEffect, useState } from 'react'
import { Alert } from '../../../components/Alert/Alert'
import { NavBar } from '../../../components/NavBar/NavBar'
import { SCText } from '../styles'

// Styles
import { SCAboutContainer, SCParagraph, SCTitle } from './styles'

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
        {showAlert && <Alert time={1.5} text='This is me! :D' />}
        <SCTitle>Hola!</SCTitle>
        <SCParagraph>
          My name is Matías and I'm a front-end developer. I grow up in a small
          town called Valle viejo in the province of Catamarca in Argentina, and
          since my parents bring that first computer when I was 8, I was shocked
          by technology, I always followed the news about the new tech thing
          that was coming, and I got my first gaming pc at the age of 18 (a gift
          for my birthday), then my passion about technology didn't do anything
          but growing up, and then in a trip with my family in 2019 (just before pandemic) I
          realized that I wanted to work in Tech somehow, so then it begun my
          passion for the web development. My locked 2020 was a deep learning on coding, now I live with my beatiful
          girlfriend, my cat Sam 🐈, and working on something that I love.
        </SCParagraph>
          <SCParagraph>()</SCParagraph>
      </SCAboutContainer>
    </>
  )
}
