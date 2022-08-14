import { SCContainer } from './styles'

interface AlertTypes {
  type?: string
  text: string
  time?: number
}

export const Alert = ({ type, text, time = 2 }: AlertTypes) => {
  return (
    <SCContainer type={type} animationTime={time}>
      {text}
    </SCContainer>
  )
}
