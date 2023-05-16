import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Sidebar from './sidebar';
import {Flex} from 'rebass';

const WidthWrapperNoSidebar = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
`;

const WidthWrapperSidebar = styled.div`
  max-width: 1024px;
  margin: 0 1em;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
`;


const Layout = ({showSidebar, children}) => {
  const WW = showSidebar ? WidthWrapperSidebar : WidthWrapperNoSidebar;
  return (
    <>
      <Navbar/>
      <Flex>
        {showSidebar && <Sidebar/>}
        <WW>
          {children}
        </WW>
      </Flex>
    </>
  );
};

export default Layout;
