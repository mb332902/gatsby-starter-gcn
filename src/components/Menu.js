import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const Header = styled.header`
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }

    img {
      width: 120px;
      position: relative;
      top: -13px;
    }
  }

  a {
    text-decoration: none;
    color: #505050;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: Black;
    }
  }
`

const activeLinkStyle = {
  color: 'black',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              <img src={logo} alt="Dustin Gerken Design"/>
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
