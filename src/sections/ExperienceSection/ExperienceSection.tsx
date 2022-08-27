import { useEffect, useState } from 'react'

// Components
import { Box } from '../../components/Box/Box'
import { LinkButton } from '../../components/LinkButton/LinkButton'
import { Alert } from '../../components/Alert/Alert'

// Translations
import { useTranslation } from 'react-i18next'

// Data
import { BRAIN_IT, COR, experiences, FREELANCE } from './data'

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

export const ExperienceSection = () => {
  const [showAlert, setShowAlert] = useState(false)
  const { t } = useTranslation('experience')

  const freelanceExp = experiences.find((exp) => exp === FREELANCE)
  const corExp = experiences.find((exp) => exp === COR)
  const brainItExp = experiences.find((exp) => exp === BRAIN_IT)

  if (freelanceExp) {
    freelanceExp.subtitle = t('freelanceRole')
    freelanceExp.text = t('freelanceText')
  }
  if (corExp) {
    corExp.subtitle = t('corRole')
    corExp.text = t('corText')
  }
  if (brainItExp) {
    brainItExp.subtitle = t('brainitRole')
    brainItExp.text = t('brainitText')
  }

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
      <SCTitle>{t('title')}</SCTitle>
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
        <LinkButton url=''>{t('projectsButton')}</LinkButton>
      </SCBoxContainer>

      {showAlert && <Alert type='warn' time={2.5} text={t('alert')} />}
    </SCContainer>
  )
}
