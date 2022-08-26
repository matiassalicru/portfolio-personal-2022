// Components
import { LinkButton } from '../../components/LinkButton/LinkButton'

// Styles
import {
  SCText,
  SCUnderline,
  SCContainer,
  SCTextWrapper,
  SCHighlightText,
} from './styles'

// Translations
import { useTranslation } from 'react-i18next'

// Assets
import Lottie from 'react-lottie'
import animationData from '../../lotties/66205-coding.json'
const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const AboutSection = () => {
  const { t } = useTranslation('about')
  const windowWidth = window.innerWidth

  return (
    <SCContainer id='about'>
      <SCTextWrapper>
        <SCText>
          <SCUnderline>{t('underlined1')} </SCUnderline>
          <SCHighlightText>{t('highlighted1')}</SCHighlightText> 
          {t('text')}
          <SCHighlightText>
            <SCUnderline> {t('underlined2')}</SCUnderline>
          </SCHighlightText>
        </SCText>
        <LinkButton url='/about'>{t('button')}</LinkButton>
      </SCTextWrapper>
      {windowWidth >= 768 && (
        <Lottie
          options={lottieOptions}
          width={450}
          height={450}
          isClickToPauseDisabled
        />
      )}
      <br />
    </SCContainer>
  )
}
