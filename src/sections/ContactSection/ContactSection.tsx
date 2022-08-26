import { useEffect, useState } from 'react'

// Styles
import {
  SChr,
  SCImg,
  SCText,
  SCLink,
  SCEmail,
  SCContainer,
  SCUnderline,
  SCCopyButton,
  SCEmailSection,
  SCSocialList,
  SCSocialItem,
  SCImgSocial,
} from './styles'

// Assets
import memoHello from '../../lotties/memoji2.svg'
import github from '../../lotties/github.png'
import linkedIn from '../../lotties/linkedin.png'
import twitter from '../../lotties/twitter.png'
import { Alert } from '../../components/Alert/Alert'

// Translations
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const [showAlert, setShowAlert] = useState(false)
  const { t } = useTranslation('contact')

  const copyToClipboard = () => {
    const el = document.querySelector('[data-id="email"]')?.textContent
    if (navigator?.clipboard?.writeText && el) {
      setShowAlert(true)
      return navigator?.clipboard?.writeText(el)
    }
    return Promise.reject('The Clipboard API is not available.')
  }

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false)
      }, 2000)
    }
  }, [showAlert])

  return (
    <SCContainer id='contact'>
      <SCText>
        {t('title')}
        <b>
          {t('subtitle')}
          <SCLink
            href='https://www.linkedin.com/in/matias-salicru/'
            target='blank'
            rel='noopener noreferrer'>
            <SCUnderline>LinkedIn!</SCUnderline>
          </SCLink>
        </b>
      </SCText>
      <SChr />
      <SCImg src={memoHello} alt='memoji hi' />
      <SCText>{t('email')}</SCText>
      <SCEmailSection>
        <SCEmail
          href='mailto:mattiassalicru@gmail.com'
          target='_self'
          data-id='email'>
          mattiassalicru@gmail.com
        </SCEmail>
        <SCCopyButton onClick={copyToClipboard}>{t('copy')}</SCCopyButton>
      </SCEmailSection>
      <SCSocialList>
        <SCSocialItem>
          <a
            href='https://www.linkedin.com/in/matias-salicru/'
            target='_blank'
            rel='noopener noreferrer'>
            <SCImgSocial src={linkedIn} />
          </a>
        </SCSocialItem>
        <SCSocialItem>
          <a
            href='https://github.com/matiassalicru'
            target='_blank'
            rel='noopener noreferrer'>
            <SCImgSocial src={github} />
          </a>
        </SCSocialItem>
        <SCSocialItem>
          <a
            href='https://twitter.com/MatiasSalicru'
            target='_blank'
            rel='noopener noreferrer'>
            <SCImgSocial src={twitter} />
          </a>
        </SCSocialItem>
      </SCSocialList>
      {showAlert && <Alert time={2} text={t('alert')} />}
    </SCContainer>
  )
}
