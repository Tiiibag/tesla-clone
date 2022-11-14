import React, { useState } from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { Slide } from 'react-reveal'




function Header() {
  const [MenuStatus, setMenuStatus] = useState(false)
  return (
    <Container>
        <Logo src="./images/logo.svg" />
      
        <Menu>
          <p><a href='#'>Model S</a></p>
          <p><a href='#'>Model 3</a></p>
          <p><a href='#'>Model Y</a></p>
          <p><a href='#'>Accessories</a></p>
        </Menu>
        <Sidebar onClick={() => setMenuStatus (true)}>
          <a href='#'>Menu</a>
        </Sidebar>
        <MenuNav show = {MenuStatus}>
          <CloseWrap>
            <CloseBtn onClick={() => setMenuStatus(false)} src='./images/icons8-close.svg' />
          </CloseWrap>
            <li><a href='#'>Model S</a></li>
            <li><a href='#'>Model 3</a></li>
            <li><a href='#'>Model Y</a></li>
            <li><a href='#'></a>Existing Inventory</li>
            <li><a href='#'></a>Used Inventory</li>
            <li><a href='#'></a>Trade-In</li>
            <li><a href='#'></a>Test Drive</li>
            <li><a href='#'></a>Insurance</li>
        </MenuNav>
    </Container>

  )
}

export default Header

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  min-height: 60px;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  justify-content: space-between;
  z-index:1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  // display: none;
  p {
    font-weight: 540;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    }
    @media (max-width: 1200px){
      display: none;
    }
`
const Sidebar = styled.div`
  padding: 6px 10px;
  background-color: rgb(93, 96, 100, 0.21);
  border-radius: 3.5px;
  font-weight: 400;
  cursor: pointer;

  a{
    color: black;
    font-family: Arial, Helvetica, sans-serifArial, sans-serif;
  }
`
const Logo = styled.img`
  width: 120px;
  height: 15px;
`
const MenuNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(249, 249, 249, 0.8);
  width: 300px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: start;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a{
    font-weight: 550;
  }
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.4s ease-in;
  `

const CloseBtn = styled.img`
  height: 20px;
  cursor: pointer;
`
const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`
