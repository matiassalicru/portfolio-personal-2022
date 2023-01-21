// Images/Logos
import CORLogo from '../../lotties/cor-logo.png'
import FreelanceLogo from '../../lotties/memoji.png'
import BrainITLogo from '../../lotties/brain-it.png'

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

import cover8 from '../../lotties/cover8.png'
import cover9 from '../../lotties/cover9.png'
import cover10 from '../../lotties/cover10.png'

export const TECHNOLOGIES = [js, html, css, git, docker, github, styled, typescript, jest, reactLogo]
export const PROJECTS = [{ title: 'Blog', image: cover9, url: 'https://matiassalicru-blog.vercel.app/' }, { title: 'Portfolio', image: cover10, url: 'https://matiassalicru.vercel.app/' }, { title: '', image: cover8, url: 'https://github.com/matiassalicru' }]

export const COR = {
  title: 'COR Global Ltd',
  subtitle: 'corRole',
  text: 'corText',
  image: CORLogo,
  date: 'Jul 2021 - Present'
}
export const BRAIN_IT = {
  title: 'Brain IT',
  subtitle: 'brainitRole',
  text: 'brainitText',
  image: BrainITLogo,
  date: 'Jul 2021 - Sep 2021'
}

export const FREELANCE = {
  title: 'Freelance',
  subtitle: 'freelanceRole',
  text: 'freelanceText',
  image: FreelanceLogo,
  date: 'Jul 2020 - Jul 2021'
}

export const EXPERIENCES = [
  FREELANCE, BRAIN_IT, COR
]
