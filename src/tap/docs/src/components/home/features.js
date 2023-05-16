import React from 'react';
import styled from 'styled-components';
import {theme, breakpoints} from '../../theme';
import {Image, Flex, Box} from 'rebass';
import brain from '../../images/brain.gif';
import batteries from '../../images/batteries.gif';
import separator from '../../images/separator.svg';
import {ButtonLink} from '../links';
import {Link} from 'gatsby';

const OuterContainer = styled.section`
  background-color: ${theme.colors.white};
  box-shadow: 0 0px 11px 5px #33333312;
  padding: 40px 20px;
  position:relative;
  z-index: 2;

  @media screen and (min-width: ${breakpoints.TABLET}) {
    padding: 70px 20px;
    margin-top: -80px;
  }
`;

const Content = styled(Flex)`
  max-width: 900px;
  margin: auto;
  flex-direction: column;
`;

const FeatureImage = styled(Image)`
  width: 150px;
  margin: auto;
`;

const Code = styled.code`
  background-color: #ebe7e7;
  font-size: 12px;
  word-break: break-word;
`;

const Separator = styled(Image)`
  width: 18px;
  margin: 0 10px;
  transform: rotate(90deg);
  margin: auto;

  @media screen and (min-width: ${breakpoints.TABLET}) {
    transform: rotate(0deg);
    margin: ${theme.space[7]}px ${theme.space[3]}px 0;
  }
`;

const TextBox = styled(Box)`
  max-width: 500px;
`;

const Features = () => {
  return(
    <OuterContainer>
      <Content>
        <Box alignSelf="center"><h2>Node-Tap Features</h2></Box>
        <Flex pb={4} flexDirection={['column', 'column', 'row']} alignItems="center">
          <Flex px={4} flexDirection="column">
            <FeatureImage pb={[0, 3]} src={brain} alt="brain"  />
            <Box alignSelf="center"><h3>No Fancy DSL to Learn</h3></Box>
            <TextBox p={2}>
              <p>
                The API is relatively small, even though it&#39;s a powerful
                framework.  <Code>t.test()</Code>, <Code>t.end()</Code>, and a
                handful of <Link to="/docs/api/asserts/">assertion
                  methods</Link> are all you need.  This results in having to
                write and remember less, so you can just write some tests.
              </p>
            </TextBox>
          </Flex>
          <Separator src={separator} alt="separator" />
          <Flex px={4} flexDirection="column">
            <FeatureImage pb={[0, 3]} src={batteries} alt="batteries" />
            <Box alignSelf="center"><h3>Batteries Included</h3></Box>
            <TextBox p={2}>
              <p>
                <Link to="/docs/coverage">Code coverage</Link>, <Link
                  to="/docs/reporting">test reporting</Link>, error handling,
                {' '}<Link to="/docs/parallel/">parallel tests</Link>, support
                for {' '}<Link
                  to="/docs/using-with">JSX, TypeScript, ESM, Flow</Link>, and
                a full-featured <Link to="/docs/api/asserts/">assertion
                  set</Link> are all baked in.  No need to choose any
                other stuff. Just write some tests.
              </p>
            </TextBox>
          </Flex>
        </Flex>
        <ButtonLink to="/docs/">Get Started</ButtonLink>
      </Content>
    </OuterContainer>
  );
};

export default Features;
