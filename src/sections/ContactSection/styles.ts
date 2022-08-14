import styled from 'styled-components'

export const SCContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  min-height: fit-content;
  width: 60vw;
  position: relative;
`

export const SCText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 42px;
  line-height: 58px;
  height: 100px;
  font-family: 'Poiret One', cursive;
  max-width: 700px;
`

export const SCUnderline = styled.div`
  font-family: 'montserrat', sans-serif;
  border-radius: 20px ;
  background-repeat: no-repeat;
  background-size: 50% .1em;
  background-position: 50% 98%;
  transition: all .2s;
`

export const SChr = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.accentColor};
  border-color: ${({ color }) => color};
  margin: 20px 0;
`

export const SCEmail = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 10px;
  font-size: 24px;
  white-space: nowrap;
  padding: 10px;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.accentColor};
    letter-spacing: 1.5px;
    background-color: ${({ theme }) => theme.accentColor};
    color: hsl(0, 0%, 100%);
    box-shadow: orange 0px 7px 40px 0px;
  }
`
export const SCLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  transition: all .2s;
  width: fit-content;


  &:hover ${SCUnderline} {
    background-image: linear-gradient(120deg, #ff660050 0%, ${({ theme }) => theme.accentColor} 80%);
  }
`

export const SCCopyButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  background: none;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  transition: all .1s;
  font-family: 'montserrat', sans-serif;
  font-weight: 700;

  &:hover {
    border: 1px solid ${({ theme }) => theme.accentColor};
    letter-spacing: 3px;
    background-color: ${({ theme }) => theme.accentColor};
    color: hsl(0, 0%, 100%);
    box-shadow: orange 0px 7px 40px 0px;
  }
  
  &:active {
    transform: translate(3px, 3px)
  }
`

export const SCEmailSection = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.accentColor};
  padding: 15px;
  border-radius: 10px;
`

export const SCImg = styled.img`
  height: 10em;
  width: 10em;
`

export const SCSocialList = styled.ul`
  display: flex;
  list-style: none;
  margin: 60px;
  width: fit-content;
  padding: 10px;
`

export const SCSocialItem = styled.li`
  display: flex;
  margin: 10px 20px;
  transition: transform .2s ease;


  &:hover {
    transform: scale(1.3);
  }
`

export const SCImgSocial = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: filter .2s;

  &:hover {
    filter: drop-shadow(5px 5px 5px ${({ theme }) => theme.accentColor});
  }
`
