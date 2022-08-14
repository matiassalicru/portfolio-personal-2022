import { useEffect } from 'react'
import Lottie from 'react-lottie'
import { LinkButton } from '../../components/LinkButton/LinkButton'
import animationData from '../../lotties/66205-coding.json'
import {
  SCText,
  SCUnderline,
  SCContainer,
  SCTextWrapper,
  SCHighlightText,
} from './styles'

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const AboutSection = () => {
  const windowWidth = window.innerWidth

  useEffect(() => {
    console.log('windowWidth', windowWidth)
  }, [windowWidth])
  return (
    <SCContainer id='about'>
      <SCTextWrapper>
        <SCText>
          <SCUnderline>I do my best building </SCUnderline>
          <SCHighlightText>
            pixel perfect, high performarce and High-Quality
          </SCHighlightText>{' '}
          applications and websites using the peek technologies helping
          individuals and business to achive their goals.
          <SCHighlightText>
            <SCUnderline>Enjoying the journey.</SCUnderline>
          </SCHighlightText>
        </SCText>
        <LinkButton url='/about'>More about me!</LinkButton>
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
