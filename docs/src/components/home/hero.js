import React from 'react';
import styled from 'styled-components';
import {colors} from '../../theme';
import {Image} from 'rebass';
import logo from '../../images/logo.png';

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

const HeroContainer = styled.div`
  position: relative;
  margin: -30px auto 0;
  max-width: 600px;
`;

const Logo = styled(Image)`
  position: absolute;
  top: 20%;
  width: 60%;
  left: 0;
  right: 0;
  margin: auto;
`;

const Hero = () => {
  return(
    <HeroContainer>
      <OuterCircle/>
      <InnerCircle/>
      <Logo src={logo}/>
    </HeroContainer>
  );
}

export default Hero;