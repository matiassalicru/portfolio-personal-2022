// Styles
import { SCButtonContainer, SCLink } from './styles'

// Types
interface LinkButtonTypes {
  url?: string
  children: string
}

export const LinkButton= ({children,  url = '/' }: LinkButtonTypes) => {
  return (
    <SCButtonContainer>
        <SCLink to={url}>
          {children}
        </SCLink>
    </SCButtonContainer>
  )
}
