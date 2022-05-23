import styled from 'styled-components'
import { BACKGROUND_COLOR } from '../../../utils/constants'

export const SCAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${BACKGROUND_COLOR};
  min-height: 100vh;
`

export const SCTitle = styled.h2`
  margin-top: 200px;
  font-weight: 300;
  font-size: 32px;
  font-style: italic;
`

export const SCParagraph = styled.p`
  display: flex;
  font-family: sans-serif;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  font-size: 24px;
  min-height: 100px;
  max-width: 800px;
  font-weight: lighter;
  line-height: 36px;
`
