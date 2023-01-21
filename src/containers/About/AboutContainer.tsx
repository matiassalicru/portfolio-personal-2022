// Components
import { useEffect, useState } from 'react'
import { Alert } from '../../components/Alert/Alert'
import { NavBar } from '../../components/NavBar/NavBar'

// Styles
import {
  SCAboutContainer,
  SCParagraph,
  SCTitle,
  SCTextWrapper,
  SCImg,
} from './styles'

// Assets
import meSit from '../../lotties/sit.jpg'

// Translations
import { useTranslation } from 'react-i18next'

export const AboutContainer = () => {
  const [showAlert, setShowAlert] = useState(true)
  const { t } = useTranslation(['about', 'home'])

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
          <SCTitle>{t('home:hi')}</SCTitle>
          <SCParagraph>
            {t("about:about-text")}
          </SCParagraph>
        </SCTextWrapper>
        {showAlert && <Alert time={1.5} text={t("about:about-alert")}/>}
        <SCImg src={meSit} />
      </SCAboutContainer>
    </>
  )
}
