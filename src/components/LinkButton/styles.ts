import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SCButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

export const SCLink = styled(Link)`
  background: none;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.accentColor};
  cursor: pointer;
  transition: all .15s;
  color: inherit;
  text-decoration: none;

  &:hover {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.accentColor};
    transform: scale(1.1);
  }
`
