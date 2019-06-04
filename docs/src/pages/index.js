import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

export default ({ data }) => {
  console.log(data)
  console.log('hello');
  return (
    <>
    <Navbar/>
    <Layout>
      <div> 
        Amazing Pandas Eatings Things
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`