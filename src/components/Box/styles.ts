import styled from 'styled-components'

export const SCBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 20px;
  margin: 20px 20px; 
  min-width: 300px;
  max-width: 270px;
  min-height: 420px;
  box-shadow: 4px 4px 4px 4px ${({ theme }) => theme.backgroundColor};
  line-height: 24px;
  font-weight: 500;
`

export const SCRound = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.backgroundSecondaryColor};
  left: 20px;
  top: -22px;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 5px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SCImg = styled.img`
  width: 25px;
  height: 25px;
  height: auto;
  border-radius: 50%;
`

export const SCTilteContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SCTitle = styled.h3`
  margin-bottom: 0;
  font-size: 20px;
`

export const SCSubtitle = styled.h5`
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  margin: 0;
`

export const SCText = styled.p`
  display: flex;
  width: 100%;
  text-align: left;
  font-size: 16px;
`

export const SCDate = styled.p`
  display: flex;
  justify-content: end;
  font-size: 12px;
  font-style: italic;
`
