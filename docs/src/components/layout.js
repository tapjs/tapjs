import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar';

const WidthWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  width: 100%;
  padding: 20px;
`;

const Layout = ({children}) => {
  return(
    <WidthWrapper>
      {children}
    </WidthWrapper>
  );
}

export default Layout;
