import React from 'react'
import styled from 'styled-components';


const Top = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 60px;
  

  a {
    color: #fff;
    text-decoration: none;


    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Topbar() {
  return (
    <Top> 
        
      <NavLinks>
      <Logo>My Logo</Logo>
        <a href="/">Home</a>
        <a href="#/about">About</a>
        <a href="#/portfolio">Portfolio</a>
        <a href="#/contact">Contact</a>
      </NavLinks>
    </Top>
    
  )
}
