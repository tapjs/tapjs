import React from 'react';
import styled from 'styled-components';
import {colors} from '../../theme';
// import {graphql} from 'gatsby';

const OuterContainer = styled.section`
  background-color: ${colors.white};
  box-shadow: 0 0px 11px 5px #33333312;
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
`;

export default ({ data }) => {
  return(
    <OuterContainer>
      <Content>
        hello
      </Content>
    </OuterContainer>
  );
}

// export default Features;

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