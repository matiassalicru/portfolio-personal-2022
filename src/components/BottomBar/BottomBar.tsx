import { SCContainer, SCImg, SCText, SCLeft, SCRight } from './styles'
import code from '../../lotties/code.png'

export const BottomBar = () => {
  return (
    <SCContainer>
      <SCLeft>
        <SCImg src={code}/><SCText> with ๐งก in Argentina.</SCText>
      </SCLeft>
      <SCRight>
        <SCText>Powered by React - Vite - Styled Components - Vercel ๐</SCText>
      </SCRight>
    </SCContainer>
  )
}
