import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {NavLink} from './links';
import {Flex, Box} from 'rebass';
import styled from 'styled-components';

const LinksFlex = styled(Flex)`
  padding-bottom: 100px;
`;

const DocLinks = ({data}) => {
  const linkArray = data.allMarkdownRemark.edges;
  const sortedArray = linkArray.sort((a, b) => (a.node.frontmatter.section - b.node.frontmatter.section));
  
  return(
    <>
      <LinksFlex flexDirection="column">
        {sortedArray.map((link, i) => (
          <Box key={i} pl={!(Number.isInteger(link.node.frontmatter.section)) ? 3 : 0}>
            <NavLink 
              to={link.node.fields.slug}
              activeClassName="active-sidebarlink"
            >
              {link.node.frontmatter.title}
            </NavLink>
          </Box>
        ))} 
      </LinksFlex>
    </>
  );
};

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
    render={data => <DocLinks data={data} {...props} />}
  />
);
