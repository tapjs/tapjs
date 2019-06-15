import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {Flex} from 'rebass';

const WidthWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
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
};

export default Layout;
