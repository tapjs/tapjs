import React from "react"
import styled from 'styled-components';
import Navbar from './Navbar';

const WidthWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 100%;
`;

const Layout = ({children}) => {
  return(
    <>
      <Navbar/>
      <WidthWrapper>
        {children}
      </WidthWrapper>
    </>
  );
}

export default Layout;