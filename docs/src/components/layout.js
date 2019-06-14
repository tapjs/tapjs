import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Sidebar from './sidebar';
import {Flex, Box} from 'rebass';

const WidthWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
`;

const Layout = ({showSidebar, children}) => {
  return(
    <>
      <Navbar/>
      <Flex>
        {showSidebar && <Sidebar/>}
          <WidthWrapper>
            {children}
          </WidthWrapper>
      </Flex>
    </>
  );
}

export default Layout;
