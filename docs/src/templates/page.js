import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import Navbar from '../components/navbar';


export default ({data}) => {
  const post = data.markdownRemark;
  return (
    <>
    <Navbar/>
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
    </>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`