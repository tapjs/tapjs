import React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';
import {theme, breakpoints} from '../theme';
import hamburgerIcon from '../images/hamburger.svg';
import MobileNavbar from './mobileNavbar';
import NavLinks from './NavLinks';
import {Link as GatsbyLink} from 'gatsby';

const version = require('../../../package.json').version;

const NavbarOuter = styled(Flex)`
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 10px 0px #b8b3b3;
  height: 68px;
  align-items: center;
  font-family: Trebuchet MS, Arial, Helvetica, sans-serif;
  z-index: 3;
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
`;

const Links = styled(Flex)`
  display: none;

  @media screen and (min-width: ${breakpoints.TABLET}) {
    display: flex;
    align-items: flex-end;
  }
`;

const Logo = styled(GatsbyLink)`
  text-transform: uppercase;
  color: ${theme.colors.black};
  font-weight: 700;
  font-size: 26px;
  padding: 0 10px;
  letter-spacing: 1px;
  text-shadow: 1px -2px 1px #88888852;
  text-decoration: none;

  small {
    text-transform: none;
    font-size: 13px;
  }
`;

const Hamburger = styled.button`
  background-image: url(${hamburgerIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 20px;
  width: 30px;
  background-color: transparent;
  cursor: pointer;
  border: none;

  @media screen and (min-width: ${breakpoints.TABLET}) {
    display: none;
  }
`;

class Navbar extends React.Component {
  
  state = {
    navOpen: false,
  }

  toggleNav = () => {
    this.setState({navOpen: !this.state.navOpen});
  }

  render() {
    return(
      <NavbarOuter>
        {this.state.navOpen &&
          <MobileNavbar toggleNav={this.toggleNav}/>
        }
        <Content>
          <Hamburger onClick={this.toggleNav} aria-label="navigation" />
          <Logo to="/">Node Tap <small>v{version}</small></Logo>
          <Links>
            <NavLinks desktop/>
          </Links>
        </Content>
      </NavbarOuter>
    );
  }
}

export default Navbar;
