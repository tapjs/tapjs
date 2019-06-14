import React from 'react';
import styled from 'styled-components';
import DocLinks from './DocLinks';
import {theme} from '../theme';

const Container = styled.div`
  background-color: ${theme.colors.lightGrey};
  flex: 0 0 250px;
  overflow-y: scroll;
  height: 100vh;
  top: 68px;
  position: sticky;
  padding: 20px 20px 100px;
  box-shadow: 1px 0 10px 1px #33333330;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Sidebar = () => {
  return(
    <Container>
      <DocLinks/>
    </Container>
  );
};

export default Sidebar;