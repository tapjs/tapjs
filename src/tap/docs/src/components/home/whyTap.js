import React from 'react';
import styled from 'styled-components';
import EncircledImage from '../EncircledImage';
import questionMark from '../../images/question-mark-2.gif';

const Content = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 40px 20px 20px;
`;

const WhyTap = ({markdownData}) => {
  return(
    <section>
      <Content>
        <EncircledImage image={questionMark} alt="(?)" />
        <div dangerouslySetInnerHTML={{ __html: markdownData}} />
      </Content>
    </section>
  );
};

export default WhyTap;
