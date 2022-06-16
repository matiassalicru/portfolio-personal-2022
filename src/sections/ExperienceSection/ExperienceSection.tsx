// Components
import { Box } from '../../components/Box/Box'
import { LinkButton } from '../../components/LinkButton/LinkButton'
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import withReactContent from 'sweetalert2-react-content'

// Data
import { experiences } from './data'

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

// Images/Logos
import js from '../../lotties/js.png'
import html from '../../lotties/html.png'
import css from '../../lotties/css.png'
import git from '../../lotties/git.png'
import docker from '../../lotties/docker.png'
import github from '../../lotties/github.png'
import styled from '../../lotties/styled.png'
import typescript from '../../lotties/typescript.png'
import jest from '../../lotties/jest.png'
import reactLogo from '../../lotties/react-logo.png'

export const ExperienceSection = () => {
  const SwalModal = withReactContent(Swal)

  const onNotAvailable = () => {
    SwalModal.fire({
      timer: 3000,
      title: 'This section is not available yet',
      width: 380,
      icon: 'warning',
      customClass: 'sweetalert',
      position: 'bottom-end',
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
      toast: true,
      showConfirmButton: false,
    })
  }

  return (
    <SCContainer id='experience'>
      <SCTitle>Experience</SCTitle>
      <SCBoxContainer>
        {!!experiences.length &&
          experiences.map(({ title, subtitle, text, image, date }) => (
            <Box
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
      <SCBoxContainer onClick={onNotAvailable}>
        <LinkButton url=''>Check my personal projects!</LinkButton>
      </SCBoxContainer>
    </SCContainer>
  )
}
