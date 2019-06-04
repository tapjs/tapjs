import React from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";


export default ({data}) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>{post.frontmatter.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div>Hello blog post</div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`