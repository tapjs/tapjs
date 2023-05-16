const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');

// creating a new field that graphql will pick up
exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({node, getNode, basePath: 'content'});
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

// actions is an object with a lot of action properties
exports.createPages = ({graphql, actions}) => {
  // plucking create page from that action object and uses it below
  const {createPage} = actions;
  //returning graphql query that is a promise and creates a page for each 
  //node that is returned from the query
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/page.js'),
        context: {
          slug: node.fields.slug,
        }
      });
    });
  });
};
