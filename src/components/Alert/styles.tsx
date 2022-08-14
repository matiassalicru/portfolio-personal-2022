import styled, { css, keyframes } from 'styled-components'

interface SCContainerTypes {
  type?: string
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
  box-shadow: ${({ theme }) => theme.accentColor} 0px 7px 40px 0px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.accentColor};
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;
  position: fixed;
  letter-spacing: 3px;
  z-index: 2;
  animation: ${insideOut} ${({ animationTime }) => `${animationTime}s`}
    ease-in-out normal;

  ${({ type }) => {
    return (
      type === 'warn' &&
      css`
        background-color: ${({ theme }) => theme.backgroundSecondaryColor};
        left: 30px;
        letter-spacing: 1.5px;
        box-shadow: ${({ theme }) => theme.accentColor} 0px 2px 10px 0px;

        @media (max-width: 768px) {
          padding: 12px 30px;
          letter-spacing: 1;
          font-size: 10px;
        }
      `
    )
  }}
`
