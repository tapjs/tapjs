import React from 'react';
import styled from 'styled-components';
import {StaticQuery, graphql} from 'gatsby';
import {NavLink} from './links';
import {Flex, Box} from 'rebass';

const Container = styled.div`
  background-color: #f1f1f1;
  width: 250px;
  overflow-y: scroll;
  height: 100vh;
  top: 68px;
  position: sticky;
  padding: 20px 20px 100px;
  box-shadow: 1px 0 10px 1px #33333330;
`;

const Sidebar = ({data}) => {
  console.log('blerg');
  const linkArray = data.allMarkdownRemark.edges;
  const sortedArray = linkArray.sort((a, b) => (a.node.frontmatter.section - b.node.frontmatter.section));
  console.log(sortedArray);
  return(
    <Container>
      <Flex flexDirection="column">
        {linkArray.map((link, i) => (
          <Box py={1} pl={!(Number.isInteger(link.node.frontmatter.section)) ? 3 : 0}>
            <NavLink 
              key={i}
              to={link.node.fields.slug}
              activeClassName="active-sidebarlink"
              >
              {link.node.frontmatter.title}
            </NavLink>
          </Box>
        ))} 
      </Flex>
    </Container>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
    query navFiles {
      allMarkdownRemark(filter: {fields: {}, frontmatter: {section: {ne: null}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              section
            }
          }
        }
      }
    }
  `}
    render={data => <Sidebar data={data} {...props} />}
  />
)

// Sidebar.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// }