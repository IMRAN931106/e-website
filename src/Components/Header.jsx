import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={require('../Assets/logo.png')} alt="my logo image..." className="logo_2" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0.4rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 3rem;
  }
  .logo_2 {
   width: 10rem;
   height: 9rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .logo_2 {
      width: 10rem;
   height: 9rem;
    }
  }
`;

export default Header;
