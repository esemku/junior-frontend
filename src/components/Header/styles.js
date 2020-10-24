import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

import logoImg from "./assets/logo.svg";

export const Logo = () => <img alt="Startup Development House" src={logoImg} />;

export const Root = styled.header`
  height: 5rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.size.contentWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.div`
  padding-top: 1.2rem;
`;

export const NavItem = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`
