import styled from 'styled-components'

export const SCAboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: ${({ theme }) => theme.backgroundColor};
  min-height: 100vh;
  padding: 100px 0;

`

export const SCTextWrapper = styled.div`
  display: flex;
  flex-direction: column;


  &:first-child {
    max-width: 700px;
  }
`

export const SCImg = styled.img`
  height: auto;
  width: 400px;
  border-radius: 15px;
`

export const SCTitle = styled.h2`
  font-weight: 300;
  font-size: 32px;
  font-style: italic;
`

export const SCParagraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  font-size: 24px;
  min-height: 100px;
  max-width: 800px;
  font-weight: lighter;
  line-height: 36px;
`
