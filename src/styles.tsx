import styled from 'styled-components'

export const SCFixedButtons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  bottom: 30px;
  right: 20px;
  width: fit-content;
  gap: 15px;
  z-index: 3;
`

export const SCThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  min-width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  transition: all 0.5s;

  &:active {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.color};
  }
`
