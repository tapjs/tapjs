import React from 'react';
import styled from 'styled-components';
import {theme} from '../../theme';
import {Image, Flex} from 'rebass';
import logo from '../../images/logo.gif';
import {ButtonLink} from '../links';
const description = require('../../../../package.json').description;

const OuterCircle = styled.div`
  background-color: ${theme.colors.lightGrey};
  position: relative;
  border-radius: 50%;
  width: 100%;
  height: auto;
  padding-top: 100%;
`;

const InnerCircle = styled.div`
  background-color: ${theme.colors.lightestGrey};
  position: absolute;
  border-radius: 50%;
  width: 80%;
  height: auto;
  padding-top: 80%;
  top: 10%;
  left: 0;
  margin: auto;
  box-shadow: 1px 1px 15px 0px #3333330d;
  right: 0;
`;

const Content = styled(Flex)`
  position: relative;
  margin: 0px auto 40px;
  max-width: 800px;

  @media screen and (min-width: 768px) {
    margin: -90px auto 0;
  }
`;

const Container = styled.div`
  background-color: ${theme.colors.darkGrey};
  padding: 20px 20px 40px;

  @media screen and (min-width: 768px) {
    padding: 20px 20px;
  }
`;

const Logo = styled(Image)`
  max-width: 60%;
`;

const BuildStatus = styled.a`
  width: 90px;
  height: 20px;
  top: -20px;
  text-indent: -999em;
  position: absolute;
  background-repeat: no-repeat;
  background-image: url(https://travis-ci.org/tapjs/node-tap.svg?branch=master);
`;

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
`;

const InnerBits = styled.div`
  position: absolute;
  max-width: 600px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  top: 25%;
`;

const Hero = () => {
  return(
    <Container>
      <Content>
        <OuterCircle/>
        <InnerCircle/>
        <InnerBits>
          <BuildStatus href="https://travis-ci.org/tapjs/node-tap">Build status</BuildStatus>
          <Logo src={logo} alt="tap logo" />
          <Title>{description}</Title>
          <ButtonLink to="/docs/">Get Started</ButtonLink>
        </InnerBits>
      </Content>
    </Container>
  );
};

export default Hero;
