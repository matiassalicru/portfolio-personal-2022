// Styles
import {
  SCNavContainer,
  SCTopLeftContent,
  SCTopRightContent,
  SCButtonContainer,
  SCNavlist,
  SCLink,
  SCItem,
  SCName,
  SCSoon,
  SCLogo,
} from './styles'

// Components
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom'
import { LinkButton } from '../LinkButton/LinkButton'
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import withReactContent from 'sweetalert2-react-content'

// Data
import animationData from '../../lotties/72422-code.json'

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

  const scrollToTop = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  return (
    <SCNavContainer>
      <SCTopLeftContent>
        <SCLogo onClick={scrollToTop}>
          <Lottie
            options={lottieOptions}
            height={30}
            width={50}
            isClickToPauseDisabled
          />
          <SCName>Matías Salicrú</SCName>
        </SCLogo>
      </SCTopLeftContent>
      {showNavList ? (
        <SCTopRightContent>
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
        </SCTopRightContent>
      ) : (
        <SCButtonContainer>
          <LinkButton>Back to home</LinkButton>
        </SCButtonContainer>
      )}
    </SCNavContainer>
  )
}
