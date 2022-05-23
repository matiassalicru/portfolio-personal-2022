import { SCContainer } from './styles'

interface AlertTypes {
  text: string
  time?: number
}

export const Alert = ({ text, time = 2}: AlertTypes) => {
  return <SCContainer animationTime={time}>{text}</SCContainer>
}
