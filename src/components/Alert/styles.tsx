import styled, { keyframes } from 'styled-components'

// Utils
import { PRIMARY_COLOR } from '../../utils/constants'

interface SCContainerTypes {
  animationTime?: number
}


const insideOut = keyframes`
  0%{
    bottom: -40px;
  }

  10% {
    bottom: 30px;
  }

  15% {
    bottom: 25px;
  }

  20% {
    bottom: 30px;
  }

  60% {
    bottom: 30px;
  }

  80% {
    bottom: 25px;
  }


  90% {
    bottom: 20px;
  }

  100% {
    bottom: -40px;
  }
`



export const SCContainer = styled.div<SCContainerTypes>`
  padding: 17px 40px;
  border-radius: 10px;
  border: 0;
  background-color: white;
  box-shadow: ${PRIMARY_COLOR} 0px 7px 40px 0px;
  color: hsl(0, 0%, 100%);
  background-color: ${PRIMARY_COLOR};
  text-transform: uppercase;
  font-size: 15px;
  transition: all .5s ease;
  position: fixed;
  letter-spacing: 3px;
  z-index: 2;
  animation: ${insideOut} ${({animationTime}) => `${animationTime}s`} ease-in-out normal;
`
