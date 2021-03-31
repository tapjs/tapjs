import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Sidebar from './sidebar';
import {Flex} from 'rebass';
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/titillium-web/400.css'
import '@fontsource/titillium-web/600.css'
import '@fontsource/titillium-web/700.css'

const WidthWrapper = styled.div`
  max-width: 750px;
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
