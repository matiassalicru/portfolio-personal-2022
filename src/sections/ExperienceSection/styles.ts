import styled from 'styled-components'

export const SChr = styled.hr`
  width: 80%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.accentColor};
`

export const SCContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 800px;
  margin: 100px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundSecondaryColor};
`

export const SCTitle = styled.h1`
  margin: 0;
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`

export const SCBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SCSkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SCSkillWrapper = styled.div`
  display: flex;
  padding: 0 30px;
  transition: transform .1s;
  filter: saturate(0);
  cursor: grabbing;

  &:hover {
    transform: scale(1.2);
    filter: saturate(1);
  }
`

export const SCLogo = styled.img`
  width: fit-content;
  max-height: 60px;
`
