import styled from 'styled-components'

export const SCImage = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
`

export const SCTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const SCCard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0;
  border-radius: 16px;
  margin: 2px;
  cursor: pointer;
  transition: box-shadow .5s ease;

  &:hover {
    box-shadow: 2px 2px 5px 5px ${({ theme }) => theme.accentColor};
  }
`

export const SCCardBackdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: #22222299;
  opacity: 0;
  color: white;
  top: 0;
  left: 0;
  border-radius: 16px;
  cursor: pointer;
  transition: opacity .2s;

  &:hover  {
    opacity: 1;
  }
`


