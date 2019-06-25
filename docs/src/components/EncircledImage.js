import React from 'react';
import {theme} from '../theme';
import styled from 'styled-components';
import {Image} from 'rebass';

const Symbol = styled(Image)`
  width: 80px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const WhiteCircle = styled.div`
  width: 130px;
  height: 130px;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
`;

const GreyCircle = styled.div`
  width: 180px;
  height: 180px;
  background-color: ${theme.colors.lightGrey};
  border-radius: 50%;
  margin: auto;
  position: relative;
`;


const EncircledImage = ({image, alt}) => {
  return(
    <GreyCircle>
      <WhiteCircle>
        <Symbol src={image} alt={alt} />
      </WhiteCircle>
    </GreyCircle>
  );
};

export default EncircledImage;
