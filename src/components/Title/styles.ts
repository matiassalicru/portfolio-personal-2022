import styled, { keyframes } from 'styled-components'

export const SCHello = styled.p`
  font-size: 28px;
  margin: 0;
  max-width: 500px;
  line-height: 30px;
`

export const SCImg = styled.img`
  width: 200px;
  height: 200px;
  z-index: 1;
  background-size: 37% 0.1em;
`

export const SCTitle = styled.p`
  margin: 0;
  display: flex;
  padding: 10px 0;
  font-size: 42px;
  align-items: center;
  justify-content: start;
  font-family: 'Poiret One', cursive;
  font-weight: bolder;
`

export const SCTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  height: 80vh;
  margin-top: 130px;
`

export const SCTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(30deg);
  }
`

export const SCShake = styled.span`
  display: inline-block;
  animation: ${rotate} .2s linear infinite alternate;
  font-size: 2rem;
  padding: 0 5px;
`
