import { Box } from '../../components/Box/Box'
import { brainTtText, corText, freelanceText } from './data'
import {
  SChr,
  SCLogo,
  SCTitle,
  SCContainer,
  SCSkillWrapper,
  SCBoxContainer,
  SCSkillsContainer,
} from './styles'

// Images/Logos
import CORLogo from '../../lotties/cor-logo.png'
import BrainITLogo from '../../lotties/brain-it.png'
import FreelanceLogo from '../../lotties/memoji.png'
import js from '../../lotties/js.png'
import html from '../../lotties/html.png'
import css from '../../lotties/css.png'
import react from '../../lotties/react.png'
import git from '../../lotties/git.png'
import docker from '../../lotties/docker.png'
import github from '../../lotties/github.png'
import styled from '../../lotties/styled.png'
import typescript from '../../lotties/typescript.png'
import jest from '../../lotties/jest.png'
import reactLogo from '../../lotties/react-logo.png'

export const ExperienceSection = () => {
  return (
    <SCContainer id='experience'>
      <SCTitle>Experience</SCTitle>
      <SCBoxContainer>
        <Box title='Brain IT' text={brainTtText} image={BrainITLogo} date='Jul 2021 - Sep 2021' />
        <Box title='COR Global Ltd.' text={corText} image={CORLogo} date='Jul 2021 - Present' />
        <Box title='Freelance' text={freelanceText} image={FreelanceLogo} date='Jul 2020 - Jul 2021' />
      </SCBoxContainer>
      <SChr />
      <SCSkillsContainer>
        <SCSkillWrapper>
          <SCLogo src={html} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={css} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={js} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={typescript} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={reactLogo} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={jest} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={styled} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={git} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={github} />
        </SCSkillWrapper>
        <SCSkillWrapper>
          <SCLogo src={docker} />
        </SCSkillWrapper>
      </SCSkillsContainer>
    </SCContainer>
  )
}
