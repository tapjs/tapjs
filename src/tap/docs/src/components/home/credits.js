import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px 20px 40px;
  border-top: 2px solid #eee;
  font-style:italic;
`;

const P = styled.p`
  font-style:italic;
  font-size:13px;
  padding:0;
`;

const Credits = () => {
  return(
    <section>
      <Content>
        <div className="credits">
          <P>
            Node-tap is created and maintained by <a
              href="https://izs.me">Isaac Z. Schlueter</a>.
          </P>
          <P>
            Website design and implementation by <a
              href="http://www.tanyabrassie.com/">Tanya Brassie</a>.
          </P>
        </div>
      </Content>
    </section>
  );
};

export default Credits;
