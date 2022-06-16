// Images/Logos
import CORLogo from '../../lotties/cor-logo.png'
import FreelanceLogo from '../../lotties/memoji.png'
import BrainITLogo from '../../lotties/brain-it.png'

export const corText = 'At COR Global Ltd. As a Frontend developer I had the opportunity to work with a PM, PO, Product Designer, QA tester, Functional Analyst and also a Backend team in an stablished B2B product. At COR I worked with React, TypeScript, Jest for testing, MicroFrontends.'

export const brainItText = 'At Brain IT I worked part-time as a FullStack developer with a very small team, with a product not being released yet, so I worked in a recently started project that make it throught a lot of changes and research for technologies. In BrainIT I worked with principally with React and a bit of Node.js'

export const freelanceText = 'As a freelance I worked with clients, where I had to discuss the project details, I talked about development, technologies, deployment tools, domains, etc. These experiences help me to get into the development enviroment, and then I knew that my passion is in the Frontend development.'

export const COR = {
  title: 'COR Global Ltd',
  subtitle: 'Frontend Dev',
  image: CORLogo,
  text: corText,
  date: 'Jul 2021 - Present'
}
export const BRAIN_IT = {
  title: 'Brain IT',
  subtitle: 'Fullstack Dev',
  text: brainItText,
  image: BrainITLogo,
  date: 'Jul 2021 - Sep 2021'
}

export const FREELANCE = {
  title: 'Freelance',
  subtitle: 'Everything xd',
  text: freelanceText,
  image: FreelanceLogo,
  date: 'Jul 2020 - Jul 2021'
}

export const experiences = [
  FREELANCE, BRAIN_IT, COR
]
