import React from 'react';
import styled from 'styled-components';
import {theme} from '../theme';
import DocLinks from './DocLinks';
import closeIcon from '../images/close.svg';
import NavLinks from './NavLinks';
import {Flex} from 'rebass';

const Container = styled.div`
  background-color: ${theme.colors.white};
  min-height: 100vh;
  position: absolute;
  box-shadow: 1px 0 10px 1px #33333330;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  max-width: 250px;
  padding: 50px 20px 0px;
`;

const CloseButton = styled.button`
  border: none;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
`;

const NavLinkContainer = styled(Flex)`
  border-top: 1px solid ${theme.colors.red};
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 100px;
`;

const MobileNavbar = (props) => {
  return(
    <Container>
      <CloseButton onClick={props.toggleNav}/>
      <DocLinks/>
      <NavLinkContainer flexDirection="column">
        <NavLinks/>
      </NavLinkContainer>
    </Container>
  );
};

export default MobileNavbar;