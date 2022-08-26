import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Styles
import {
  SCNavContainer,
  SCTopLeftContent,
  SCTopRightContent,
  SCButtonContainer,
  SCNavlist,
  SCLink,
  SCItem,
  SCName,
  SCSoon,
  SCLogo,
} from './styles'

// Components
import Lottie from 'react-lottie'
import { LinkButton } from '../LinkButton/LinkButton'

// Data
import animationData from '../../lotties/72422-code.json'
import { Alert } from '../Alert/Alert'


interface NavBarTypes {
  showNavList?: boolean
}

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const NavBar = ({ showNavList = true }: NavBarTypes) => {
  const navigate = useNavigate()
  const { t } = useTranslation('navbar')
  const [showAlert, setShowAlert] = useState(false)


  const onNotAvailable = () => {
    setShowAlert((prev) => !prev)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false)
      }, 2500)
    }
  }, [showAlert])

  const windowWidth = window.innerWidth

  return (
    <SCNavContainer>
      <SCTopLeftContent>
        <SCLogo onClick={scrollToTop}>
          <Lottie
            options={lottieOptions}
            height={30}
            width={50}
            isClickToPauseDisabled
          />
          <SCName>Matías Salicrú</SCName>
        </SCLogo>
      </SCTopLeftContent>
      {windowWidth > 768 && (
        <>
          {showNavList ? (
            <SCTopRightContent>
              <SCNavlist>
                <SCItem>
                  <SCLink href='#about'>{t('about')}</SCLink>
                </SCItem>
                <SCItem>
                  <SCLink onClick={onNotAvailable} href='#blog'>
                    {t('blog')}
                  </SCLink>
                  <SCSoon>{t('soon')}</SCSoon>
                </SCItem>
                <SCItem>
                  <SCLink href='#experience'>{t('experience')}</SCLink>
                </SCItem>
                <SCItem>
                  <SCLink href='#contact'>{t('contact')}</SCLink>
                </SCItem>
              </SCNavlist>
            </SCTopRightContent>
          ) : (
            <SCButtonContainer>
              <LinkButton>{t('backHome')}</LinkButton>
            </SCButtonContainer>
          )}
        </>
      )}

      {showAlert && (
        <Alert
          type='warn'
          time={2.5}
          text='This section is not available yet'
        />
      )}
    </SCNavContainer>
  )
}
