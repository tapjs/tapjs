import React from 'react';
import Navbar from '../components/navbar';
import styled from 'styled-components';
import {Flex} from 'rebass';
import exclamationMark from '../images/exclamation.gif';
import EncircledImage from '../components/EncircledImage';
import SEO from '../components/seo';

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 80px;
`;

const Headline = styled.h1`
  margin: 10px 0 0;
`;

const ErrorPage = () => {
  return (
    <>
    <SEO title="404 Not Found" />
      <Navbar/>
      <Container>
        <div>
          <EncircledImage image={exclamationMark} alt="!" />
        </div>
        <Headline>404</Headline>
        <p>Page not found</p>
      </Container>
    </>
  );
};

export default ErrorPage;
