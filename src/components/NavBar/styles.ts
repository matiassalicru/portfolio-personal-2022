import styled from 'styled-components'

export const SCTopLeftContent = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.backgroundColor};

  @media (max-width: 768px) {
    left: 50%;
    transform: translate(-50%, 0);
  }
`

export const SCTopRightContent = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px 0;
  background: ${({ theme }) => theme.backgroundColor};

`

export const SCLogo = styled.span`
  display: flex;
  height: fit-content;
  cursor: pointer;
  align-items: center;
`

export const SCButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
`

export const SCNavContainer = styled.div`
  width: 100%;
  position: absolute;
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
      ${({ theme }) => theme.accentColor},
      ${({ theme }) => theme.accentColor}
    ),
    linear-gradient(
      to right,
      ${({ theme }) => theme.backgroundColor},
      ${({ theme }) => theme.backgroundSecondaryColor},
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
  background: ${({ theme }) => theme.accentColor};
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin-left: 7px;
  margin-top: 5px;
`
