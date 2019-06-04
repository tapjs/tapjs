import React from "react";
import {Flex} from "rebass";
import styled from "styled-components";
import {theme} from "../theme";
import {Link} from "gatsby";

const Navbar = styled(Flex)`
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 10px 0px #b8b3b3;
  height: 60px;
  align-items: center;
  font-family: Titillium Web;
`;

const Content = styled(Flex)`
  max-width: ${theme.width}px;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const NavLink = styled(Link)`
  padding: 0 10px;
  color: ${theme.colors.black};
  font-weight: 600;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1px;
`;

const Logo = styled.a`
  text-transform: uppercase;
  color: ${theme.colors.black};
  font-weight: 700;
  font-size: 34px;
  padding: 0 10px;
  letter-spacing: 1px;
  text-shadow: 1px -2px 1px #00fcff52;
  text-decoration: none;
`;

export default () => {
  return(
    <Navbar>
      <Content>
        <Logo href="/">Node Tap</Logo>
        <Flex alignItems="flexEnd">
          <NavLink 
            to="/docs"
            activeClassName="active-navlink"
            partiallyActive={true}
          >
            Docs
          </NavLink>
          <NavLink 
            to="/docs/getting-started"
            activeClassName="active-navlink"
            partiallyActive={true}
          >
            Tap Protocol
          </NavLink>
          <NavLink 
            to="/changelog"
            activeClassName="active-navlink"
            partiallyActive={true}
          >
            Changelog
          </NavLink>
          <NavLink 
            to="/changelog"
            activeClassName="active-navlink"
            partiallyActive={true}
          >
            Github
          </NavLink>
          <NavLink 
            to="/docs"
            activeClassName="active-navlink"
            partiallyActive={true}
          >
            NPM
          </NavLink>
        </Flex>
      </Content>
    </Navbar>
  );
}