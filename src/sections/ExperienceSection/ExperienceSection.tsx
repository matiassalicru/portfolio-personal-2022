// Components
import { Box } from '../../components/Box/Box'
import { LinkButton } from '../../components/LinkButton/LinkButton'

// Data
import { experiences } from './data'

// Styles
import {
  SChr,
  SCLogo,
  SCTitle,
  SCContainer,
  SCSkillWrapper,
  SCBoxContainer,
  SCSkillsContainer,
} from './styles'

// Images/Logos
import js from '../../lotties/js.png'
import html from '../../lotties/html.png'
import css from '../../lotties/css.png'
import git from '../../lotties/git.png'
import docker from '../../lotties/docker.png'
import github from '../../lotties/github.png'
import styled from '../../lotties/styled.png'
import typescript from '../../lotties/typescript.png'
import jest from '../../lotties/jest.png'
import reactLogo from '../../lotties/react-logo.png'
import { useEffect, useState } from 'react'
import { Alert } from '../../components/Alert/Alert'

export const ExperienceSection = () => {
  const [showAlert, setShowAlert] = useState(false)

  const onNotAvailable = () => {
    setShowAlert((prev) => !prev)
  }

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false)
      }, 2500)
    }
  }, [showAlert])

  return (
    <SCContainer id='experience'>
      <SCTitle>Experience</SCTitle>
      <SCBoxContainer>
        {!!experiences.length &&
          experiences.map(({ title, subtitle, text, image, date }, i) => (
            <Box
              key={i}
              title={title}
              subtitle={subtitle}
              text={text}
              image={image}
              date={date}
            />
          ))}
      </SCBoxContainer>
      <SChr />
      <SCSkillsContainer>
        <SCSkillWrapper>
          <SCLogo src={html} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={css} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={js} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={typescript} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={reactLogo} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={jest} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={styled} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={git} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={github} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={docker} />
        </SCSkillWrapper>
      </SCSkillsContainer>
      <SCBoxContainer onClick={onNotAvailable}>
        <LinkButton url=''>Check my personal projects!</LinkButton>
      </SCBoxContainer>

      {showAlert && (
        <Alert
          type='warn'
          time={2.5}
          text='This section is not available yet'
        />
      )}
    </SCContainer>
  )
}
