import { SCContainer, SCImg, SCText, SCLeft, SCRight } from './styles'
import code from '../../lotties/code.png'

export const BottomBar = () => {
  return (
    <SCContainer>
      <SCLeft>
        <SCImg src={code}/><SCText> with 🧡 in Argentina.</SCText>
      </SCLeft>
      <SCRight>
        <SCText>Powered by React - Vite - Styled Components</SCText>
      </SCRight>
    </SCContainer>
  )
}
