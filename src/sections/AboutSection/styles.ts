import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../utils/constants'

export const SCContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 95vh;
`

export const SCText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  height: 100px;
  font-family: 'Poiret One', cursive;
  max-width: 700px;
  line-height: 36px;
`

export const SCUnderline = styled.div`
  background-image: linear-gradient(120deg, ${PRIMARY_COLOR}00 0%, ${PRIMARY_COLOR} 100%);
  background-repeat: no-repeat;
  background-size: 37% 0.1em;
  background-position: 100% 95%;
`

export const SCTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 250px;
`
