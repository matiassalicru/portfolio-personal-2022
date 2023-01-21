// Utils
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useTranslation } from 'react-i18next'
// Styles
import { SCProjectsContainer, SCTitle, SCBackButtonContainer } from './styles'
// Components
import { Card } from '../../components/Card/Card'
import { NavBar } from '../../components/NavBar/NavBar'
import { BottomBar } from '../../components/BottomBar/BottomBar'
import { LinkButton } from '../../components/LinkButton/LinkButton'
// Constants
import { PROJECTS } from '../../sections/ExperienceSection/data'

export const ProjectsContainer = () => {
  const { t } = useTranslation(['experience', 'navbar'])

  return (
    <>
      <NavBar showNavList={false} />
      <SCProjectsContainer>
        <SCTitle>{t('experience:projects')}</SCTitle>
        <ResponsiveMasonry>
          <Masonry columnsCount={3} gutter='16px'>
            {PROJECTS.map(({ image, title, url }) => (
              <Card image={image} title={title} url={url} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <SCBackButtonContainer>
          <LinkButton url='/'>{t('navbar:backHome')}</LinkButton>
        </SCBackButtonContainer>
      </SCProjectsContainer>
      <BottomBar />
    </>
  )
}
