import { AboutSection } from '../sections/AboutSection/AboutSection'
import { Contact } from '../sections/ContactSection/ContactSection'
import { ExperienceSection } from '../sections/ExperienceSection/ExperienceSection'

// Styles
import { SCContainer } from './styles'

export const SectionContainer = () => {
  return (
    <SCContainer>
      <AboutSection />
      <ExperienceSection />
      <Contact />
    </SCContainer>
  )
}
