import React from 'react';
import styled from 'styled-components';
import {colors} from '../../theme';
import {Image, Flex, Box} from 'rebass';
import brain from '../../images/brain.gif';
import batteries from '../../images/batteries.gif';
import separator from '../../images/separator.svg';

const OuterContainer = styled.section`
  background-color: ${colors.white};
  box-shadow: 0 0px 11px 5px #33333312;
  padding: 70px 20px;
`;

const Content = styled(Flex)`
  max-width: 900px;
  margin: auto;
  flex-direction: column;
`;

const FeatureImage = styled(Image)`
  width: 150px;
  margin: auto;
  padding-bottom: 20px;
`;

const Separator = styled(Image)`
  width: 18px;
  margin: 0 10px;
`;

const Features = () => {
  return(
    <OuterContainer>
      <Content>
        <Box alignSelf="center"><h2>Node-Tap Features</h2></Box>
        <Flex flexDirection={['column', 'row']}>
          <Flex px={4} flexDirection="column">
            <FeatureImage src={brain}/>
            <Box alignSelf="center"><h3>No Fancy DSL to Learn</h3></Box>
            <Box w={1/2}>
              <p>The whole API is very small, even though it's a powerful framework.  `t.test()`, `t.end()`, and a handful of assertion methods.  This results in having to write and remember less than `describe('foo', () => it('is a string or null', () => expect(foo).to.be.a.string().or.null())))</p>
            </Box>
          </Flex>
          <Separator src={separator}/>
          <Flex px={4} flexDirection="column">
            <FeatureImage src={batteries}/>
            <Box alignSelf="center"><h3>Batteries Included</h3></Box>
            <p>The whole API is very small, even though it's a powerful framework.  `t.test()`, `t.end()`, and a handful of assertion methods.  This results in having to write and remember less than `describe('foo', () => it('is a string or null', () => expect(foo).to.be.a.string().or.null())))</p>
          </Flex>
        </Flex>
      </Content>
    </OuterContainer>
  );
}

export default Features;

// export const query = graphql`
//   query {
//     allMarkdownRemark(filter: {frontmatter: {type: {eq: "features"}}}) {
//       nodes {
//         fields {
//           slug
//         }
//         html
//       }
//     }
//   }
// `;