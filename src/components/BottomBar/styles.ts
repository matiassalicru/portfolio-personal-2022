import styled from 'styled-components'

export const SCContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50px;
  background-color: ${({ theme }) => theme.backgroundColor};
  opacity: .9;
  font-weight: 800;
  align-items: center;

  @media (max-width: 768px) {
    height: 65px;
  }
`
export const SCImg = styled.img`
  width: 20px;
  height: 20px;
  filter: contrast(10%);
  margin: 0 5px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const SCText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`
export const SCLeft = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: none;
  }
`

export const SCRight = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
`
