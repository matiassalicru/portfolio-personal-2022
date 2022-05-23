import Lottie from 'react-lottie'
import { LinkButton } from '../../components/LinkButton/LinkButton'
import animationData from '../../lotties/66205-coding.json'
import { SCText, SCUnderline, SCContainer, SCTextWrapper } from './styles'

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const AboutSection = () => {

  return (
    <SCContainer id='about'>
      <SCTextWrapper>
        <SCText>
          <SCUnderline>I do my best building </SCUnderline>
          <b>pixel perfect, high performarce and High-Quality</b> applications and
          websites using the peek technologies helping individuals and businesses
          to achive their goals.
          <b>
            <SCUnderline>Enjoying the journey.</SCUnderline>
          </b>
        </SCText>
        <LinkButton url='/about'>More about me!</LinkButton>
      </SCTextWrapper>
      <Lottie
        options={lottieOptions}
        width={450}
        height={450}
        isClickToPauseDisabled
      />
      <br/>
    </SCContainer>
  )
}
