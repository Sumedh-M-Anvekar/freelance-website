// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import React from 'react';
import logoimg from "/l.png";


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: #B3B5B5;
  box-shadow: 0 2px 8px rgba(243, 13, 13, 0.04);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  }
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: #f53803;
  text-decoration: none;
  width:15%;
  height:10%;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: #222;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  background: ${({ $active }) => ($active ? "#f5d020" : "transparent")};

  &:hover {
    background:rgb(233, 164, 142);
    color: #f53803;
  }
`;

export default function Navbar() {
  const location = useLocation();

  return (
    <Nav>
      <Logo to="/"><img src={logoimg} alt="img" />
      </Logo>
      <NavLinks>
        <StyledLink to="/" $active={location.pathname === "/"}>Home</StyledLink>
        <StyledLink to="/services" $active={location.pathname === "/services"}>Services</StyledLink>
        <StyledLink to="/portfolio" $active={location.pathname === "/portfolio"}>Portfolio</StyledLink>
        <StyledLink to="/about" $active={location.pathname === "/about"}>About</StyledLink>
        <StyledLink to="/contact" $active={location.pathname === "/contact"}>Contact</StyledLink>
      </NavLinks>
    </Nav>
  );
}