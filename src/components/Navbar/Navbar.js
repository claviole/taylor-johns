import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  font-family: ${(props) => props.theme.fonts.handwritten};
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.terracotta};
  margin: 0;

  &:hover {
    color: ${(props) => props.theme.colors.burnedRed};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.white};
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

const NavLink = styled(Link)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) =>
    props.active ? props.theme.colors.burnedRed : props.theme.colors.black};
  font-weight: ${(props) => (props.active ? "700" : "400")};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background-color: ${(props) => props.theme.colors.burnedRed};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: ${(props) => props.theme.colors.black};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <NavContainer>
      <Logo to="/">Taylor Johns</Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <NavLinks $isOpen={isOpen}>
        <NavLink to="/" active={location.pathname === "/" ? 1 : 0}>
          Home
        </NavLink>
        <NavLink to="/about" active={location.pathname === "/about" ? 1 : 0}>
          About
        </NavLink>
        <NavLink to="/music" active={location.pathname === "/music" ? 1 : 0}>
          My Music
        </NavLink>
        <NavLink to="/feed" active={location.pathname === "/feed" ? 1 : 0}>
          Feed
        </NavLink>
        <NavLink
          to="/contact"
          active={location.pathname === "/contact" ? 1 : 0}
        >
          Contact
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
