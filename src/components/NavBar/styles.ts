import styled from 'styled-components'
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../../utils/constants'

export const SCTopLeftContent = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 10px;
  background: #24272b;
`

export const SCTopRightContent = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px 0;
  background: #24272b;
`

export const SCLogo = styled.span`
  display: flex;
  height: fit-content;
  cursor: pointer;
`

export const SCButtonContainer = styled.div`
  display: flex;
  width: 200px;

`

export const SCNavContainer = styled.div`
  width: 100%;
`

export const SCName = styled.p`
  width: max-content;
  font-size: 28px;
  margin: 0 15px;
`

export const SCNavlist = styled.ul`
  display: flex;
  gap: 40px;
  margin: 0 50px;
`

export const SCLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  font-size: 21px;
  padding: 4px 0;
  background:
    linear-gradient(
      to right,
      ${PRIMARY_COLOR},
      ${PRIMARY_COLOR}
    ),
    linear-gradient(
      to right,
      ${TERTIARY_COLOR},
      ${SECONDARY_COLOR},
      #ff6600
  );
  background-size: 100% 2px, 0 2px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 300ms;

  &:hover {
    background-size: 0 3px, 100% 3px;
  }

`

export const SCItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`

export const SCPrimaryButton = styled.button`
  border: 1px solid #067BC2;
  border-radius: 4px;
  padding: 8px 20px;
  margin: 5px 20px;
  box-shadow: 2px 2px #067BC2;
  cursor: pointer;
  background: transparent;
  transition: ease .1s;
  width: 200px;
  color: white;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px #067BC2;
  }

`

export const SCSoon = styled.div`
  background: #ffffff50;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  margin-left: 7px;
  margin-top: 5px;
  padding: 3px 4px;
`
