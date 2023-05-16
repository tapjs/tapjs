import styled, {css} from 'styled-components';
import {Link as GatsbyLink} from 'gatsby';
import {theme} from '../theme';

const navLinkStyles = css`
  padding: 5px 10px;
  margin: 0 5px;
  line-height: 1.5;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 1px;
  transition: text-shadow 1s;
  display: block;
  font-family: Trebuchet MS, Arial, Helvetica, sans-serif;
  color: ${theme.colors.black};

  &:hover, &:active, &:focus {
    color: ${theme.colors.blue};
  }
`;

export const NavLink = styled(GatsbyLink)`
  ${navLinkStyles};
`;

export const Link = styled.a`
  ${navLinkStyles};
`;

export const buttonLinkStyles = css`
  color: #ffffff;
  background-color: ${theme.colors.lightFushia};
  width: auto;
  text-decoration: none;
  text-align: center;
  border-radius: 40px;
  padding: 15px;
  font-size: 14px;
`;

export const ButtonLink = styled(GatsbyLink)`
  ${buttonLinkStyles}
  display: block;
  width: 150px;
  margin: 20px auto;
  transition: background-color .5s;

  &:hover, &:active, &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.fushia};
  }
`;
