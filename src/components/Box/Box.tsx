import { SCBoxContainer, SCRound, SCImg, SCTitle, SCText, SCDate } from './styles'

interface BoxTypes {
  title: string
  text: string
  image: string
  date: string
}

export const Box = ({
  title,
  text,
  image,
  date
}: BoxTypes) => {
  return (
    <SCBoxContainer>
      <SCRound>
        <SCImg src={image} />
      </SCRound>
      <SCTitle>{title}</SCTitle>
      <SCText>{text}</SCText>
      <SCDate>{date}</SCDate>
    </SCBoxContainer>
  )
}
