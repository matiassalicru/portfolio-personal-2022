import { useEffect, useState } from 'react'

// Components
import { Box } from '../../components/Box/Box'
import { LinkButton } from '../../components/LinkButton/LinkButton'
import { Alert } from '../../components/Alert/Alert'

// Translations
import { useTranslation } from 'react-i18next'

// Data
import { BRAIN_IT, COR, EXPERIENCES, FREELANCE, TECHNOLOGIES } from './data'

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

export const ExperienceSection = () => {
  const [showAlert, setShowAlert] = useState(false)
  const { t } = useTranslation('experience')

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
        {!!EXPERIENCES.length &&
          EXPERIENCES.map(({ title, subtitle, text, image, date }, i) => (
            <Box
              key={i}
              title={title}
              subtitle={t(subtitle)}
              text={t(text)}
              image={image}
              date={date}
            />
          ))}
      </SCBoxContainer>
      <SChr />
      <SCSkillsContainer>
        {TECHNOLOGIES.map((img) => (
           <SCSkillWrapper>
           <SCLogo src={img} />
         </SCSkillWrapper>
        ))}
      </SCSkillsContainer>
      <SCBoxContainer>
        <LinkButton url='/projects'>{t('projectsButton')}</LinkButton>
      </SCBoxContainer>
      {showAlert && <Alert type='warn' time={2.5} text={t('alert')} />}
    </SCContainer>
  )
}
