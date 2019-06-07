import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import WhyTap from '../components/home/whytap';
import {graphql} from 'gatsby';

export default ({data}) => {
  console.log(data);
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <WhyTap markdownData={data.markdownRemark.html}/>
    </>
  )
};

export const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: {title: {eq: "why-tap"}}) {
      id
      html
    }
  }
`;
