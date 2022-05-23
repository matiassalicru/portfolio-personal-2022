import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../utils/constants'
import { Link } from 'react-router-dom'

export const SCButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SCLink = styled(Link)`
  background: none;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid ${PRIMARY_COLOR};
  cursor: pointer;
  transition: all .15s;
  color: inherit;
  text-decoration: none;

  &:hover {
    box-shadow: 2px 2px 2px ${PRIMARY_COLOR};
    transform: scale(1.1);
  }
`
