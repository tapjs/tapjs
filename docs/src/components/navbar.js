import React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';
import {theme} from '../theme';
import {Link, NavLink} from './links';

const Navbar = styled(Flex)`
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 10px 0px #b8b3b3;
  height: 68px;
  align-items: center;
  font-family: Titillium Web;
  z-index: 1;
  position: sticky;
  top: 0;
`;

const Content = styled(Flex)`
  max-width: ${theme.width}px;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.a`
  text-transform: uppercase;
  color: ${theme.colors.black};
  font-weight: 700;
  font-size: 26px;
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
            to="/docs/getting-started"
            activeClassName="active-navlink"
            partiallyActive={true}
          >
            Docs
          </NavLink>
          <NavLink 
            to="/tap-protocol"
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
          <Link
            href="https://github.com/tapjs/node-tap"
          >
            Github
          </Link>
          <Link
            href="https://www.npmjs.com/package/tap"
          >
            NPM
          </Link>
        </Flex>
      </Content>
    </Navbar>
  );
}