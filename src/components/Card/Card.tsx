// Styles
import { SCCard, SCCardBackdrop, SCImage, SCTitle } from './styles'
// Types
import { ICard } from './Card.interface'

export const Card = ({ title, image, url }: ICard) => {
  const onProjectClick = () => {
    window.open(url)
  }

  return (
    <>
      <SCCard onClick={onProjectClick}>
        <SCImage src={image} />
        <SCCardBackdrop>
          <SCTitle>{title}</SCTitle>
        </SCCardBackdrop>
      </SCCard>
    </>
  )
}
