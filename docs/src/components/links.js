import styled, {css} from 'styled-components';
import {Link as GatsbyLink} from 'gatsby';
import {theme} from '../theme';

const navLinkStyles = css`
  padding: 5px 10px;
  margin: 0 5px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 1px;
  transition: text-shadow 1s;
  display: inline-block;
  font-family: Titillium Web, monospace;

  &:hover {
    text-shadow: 1px -2px 1px #00fcff52;
  }
`;

export const NavLink = styled(GatsbyLink)`
  ${navLinkStyles};
`;

export const Link = styled.a`
  ${navLinkStyles};
`;

