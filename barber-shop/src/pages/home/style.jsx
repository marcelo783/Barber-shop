import styled from 'styled-components'


export const Header = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #141414;

`
export const Logo = styled.img`
    height: 50px;
`

export const Nav = styled.nav `
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    cursor: pointer;
    color: #D4B853;
  }
`