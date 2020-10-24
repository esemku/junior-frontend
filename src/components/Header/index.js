import React from "react";

import { Root, Wrapper, Logo, Nav, NavItem } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Nav>
        <NavItem to='start'>Start</NavItem>
        <NavItem to='my-profile'>My Profile</NavItem>
      </Nav>
    </Wrapper>
  </Root>
);
