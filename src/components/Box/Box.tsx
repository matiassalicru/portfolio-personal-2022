import {
  SCTilteContainer,
  SCBoxContainer,
  SCSubtitle,
  SCRound,
  SCImg,
  SCTitle,
  SCText,
  SCDate,
} from './styles'

interface BoxTypes {
  title: string
  subtitle: string
  text: string
  image: string
  date: string
}

export const Box = ({ title, subtitle, text, image, date }: BoxTypes) => {
  return (
    <SCBoxContainer>
      <SCRound>
        <SCImg src={image} />
      </SCRound>
      <SCTilteContainer>
        <SCTitle>{title}</SCTitle>
        <SCSubtitle>{subtitle}</SCSubtitle>
      </SCTilteContainer>
      <SCText>{text}</SCText>
      <SCDate>{date}</SCDate>
    </SCBoxContainer>
  )
}
