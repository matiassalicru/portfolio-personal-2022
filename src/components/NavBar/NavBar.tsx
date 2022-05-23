import {
  SCButtonContainer,
  SCNavContainer,
  SCNavlist,
  SCLink,
  SCItem,
  SCName,
  SCSoon,
  SCLogo,
} from './styles'

import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'

import Lottie from 'react-lottie'
import animationData from '../../lotties/72422-code.json'
import { LinkButton } from '../LinkButton/LinkButton'

interface NavBarTypes {
  showNavList?: boolean
}

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const NavBar = ({ showNavList = true }: NavBarTypes) => {
  const navigate = useNavigate()
  const SwalModal = withReactContent(Swal)

  const onNotAvailable = () => {
    SwalModal.fire({
      timer: 2000,
      text: 'This section is not available yet',
      icon: 'warning',
      showConfirmButton: false,
      background: '#112233',
    })
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  return (
    <SCNavContainer>
      <SCLogo onClick={scrollToTop}>
        <Lottie
          options={lottieOptions}
          height={30}
          width={50}
          isClickToPauseDisabled
        />
        <SCName>Matías Salicrú</SCName>
      </SCLogo>
      {showNavList ? (
        <SCNavlist>
          <SCItem>
            <SCLink href='#about'>About</SCLink>
          </SCItem>
          <SCItem>
            <SCLink onClick={onNotAvailable} href='#blog'>
              Blog
            </SCLink>
            <SCSoon>Soon</SCSoon>
          </SCItem>
          <SCItem>
            <SCLink href='#experience'>Experience</SCLink>
          </SCItem>
          <SCItem>
            <SCLink href='#contact'>Contact</SCLink>
          </SCItem>
        </SCNavlist>
      ) : (
        <SCButtonContainer> 
          <LinkButton>Volver al inicio</LinkButton>
        </SCButtonContainer>
      )}
    </SCNavContainer>
  )
}
