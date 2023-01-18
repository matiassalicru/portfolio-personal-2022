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

  const freelanceExp = EXPERIENCES.find((exp) => exp === FREELANCE)
  const corExp = EXPERIENCES.find((exp) => exp === COR)
  const brainItExp = EXPERIENCES.find((exp) => exp === BRAIN_IT)

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
        {!!EXPERIENCES.length &&
          EXPERIENCES.map(({ title, subtitle, text, image, date }, i) => (
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
        {TECHNOLOGIES.map((img) => (
           <SCSkillWrapper>
           <SCLogo src={img} />
         </SCSkillWrapper>
        ))}
      </SCSkillsContainer>
      <SCBoxContainer onClick={onNotAvailable}>
        <LinkButton url=''>{t('projectsButton')}</LinkButton>
      </SCBoxContainer>
      {showAlert && <Alert type='warn' time={2.5} text={t('alert')} />}
    </SCContainer>
  )
}
