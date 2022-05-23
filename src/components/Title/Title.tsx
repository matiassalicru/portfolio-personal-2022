import {
  SCHello,
  SCTitle,
  SCTitleContainer,
  SCShake,
  SCTextWrapper,
  SCImg,
} from './styles'

import img from '../../lotties/memoji.png'

export const Title = () => {
  return (
    <SCTitleContainer id='home'>
      <SCImg src={img} />
      <SCTextWrapper>
        <SCHello>
          HI <SCShake>👋🏼</SCShake> My name is <b>Matías</b>!
        </SCHello>
        <SCTitle>
          I'm a Front end developer <br /> from Córdoba, Argentina
        </SCTitle>
      </SCTextWrapper>
    </SCTitleContainer>
  )
}

