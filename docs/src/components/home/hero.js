import React from 'react';
import styled from 'styled-components';
import {colors} from '../../theme';
import {Image, Flex} from 'rebass';
import logo from '../../images/logo.png';
import {buttonLinkStyles} from '../links';

const OuterCircle = styled.div`
  background-color: ${colors.lightGrey};
  position: relative;
  border-radius: 50%;
  width: 100%;
  height: auto;
  padding-top: 100%;
`;

const InnerCircle = styled.div`
  background-color: ${colors.lightestGrey};
  position: absolute;
  border-radius: 50%;
  width: 80%;
  height: auto;
  padding-top: 80%;
  top: 10%;
  left: 0;
  margin: auto;
  box-shadow: 1px 1px 15px 0px #3333330d
  right: 0;
`;

const Content = styled(Flex)`
  position: relative;
  margin: -60px auto 40px;
  max-width: 800px;

  @media screen and (min-width: 768px) {
    margin: -90px auto 0;
  }
`;

const Container = styled.div`
  background-color: #e9e9e9;
  padding: 20px 20px;
`;

const Logo = styled(Image)`
  max-width: 60%;
`;

const BuildStatus = styled.a`
  width: 90px;
  height: 20px;
  top: -10px;
  position: absolute;
  background-repeat: no-repeat;
  background-image: url(https://travis-ci.org/tapjs/node-tap.svg?branch=master);
`;

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
`;

const ButtonLink = styled.a`
  ${buttonLinkStyles}
  display: block;  
  width: 150px;
  margin: 20px auto;
`;

const Text = styled.div`
`;

const InnerBits = styled.div`
  position: absolute;
  max-width: 600px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  top: 20%;
`;


const Hero = () => {
  return(
    <Container>
      <Content>
        <OuterCircle/>
        <InnerCircle/>
        <InnerBits>
          <BuildStatus href="https://travis-ci.org/tapjs/node-tap"/>
          <Logo src={logo}/>
          <Title>A Test-Anything-Protocol library for Node.js</Title>
          <ButtonLink href="/docs/getting-started">Get Started</ButtonLink>
        </InnerBits>
      </Content>
    </Container>
  );
}

export default Hero;