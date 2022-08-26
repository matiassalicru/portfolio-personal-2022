import styled from 'styled-components'

export const SCContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 95vh;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 12px;
    height: fit-content;
    gap: 0;
  }

`

export const SCHighlightText = styled.span`
  font-weight: 400;
`

export const SCText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  height: 100px;
  font-family: 'Poppins';
  font-weight: 200;
  max-width: 700px;
  line-height: 1.5;
  margin: 20px;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 18px;
    height: fit-content;
  }

`

export const SCUnderline = styled.div`
  background-image: linear-gradient(120deg, ${({ theme }) => theme.accentColor}00 0%, ${({ theme }) => theme.accentColor} 100%);
  background-repeat: no-repeat;
  background-size: 37% 0.1em;
  background-position: 100% 95%;
`

export const SCTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 300px;
`
