import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
        Buck$imple
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">About Us</MenuLink>
        <MenuLink href="">Contact Us</MenuLink>
        <MenuLink href="">Sign In</MenuLink>
        <MenuLink href="">Sign Up</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  &:hover {
    color: #072b3b;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #126d96;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  z-index: 2;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #ffffff;
  font-family: 'Noto Sans JP', sans-serif;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #126d96;
  width: 40%;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    z-index: 3;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #ffffff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`
