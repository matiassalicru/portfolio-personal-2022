// Styles
import {
  SCHello,
  SCTitle,
  SCTitleContainer,
  SCShake,
  SCTextWrapper,
  SCImg,
  SCSubtitle,
} from './styles'

// Assets
import img from '../../lotties/memoji.png'

// Lang
import { useTranslation } from 'react-i18next'

export const Title = () => {
  const { t } = useTranslation('home')
  return (
    <SCTitleContainer id='home'>
      <SCImg src={img} />
      <SCTextWrapper>
        <SCHello>
          {t("hi")} <SCShake>👋🏼</SCShake> {t('presentation')} <i>Matías!</i>
        </SCHello>
        <SCTitle>
          {t("subtitle1")} <br/>
          {t("subtitle2")} <br/>
          <SCSubtitle>
            {t("subtitle3")}
          </SCSubtitle>
        </SCTitle>
      </SCTextWrapper>
    </SCTitleContainer>
  )
}
