import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import WhyTap from '../components/home/whytap';
import {ThemeProvider} from 'styled-components'
import {graphql} from 'gatsby';
import {theme} from '../theme';

export default ({data}) => {
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <WhyTap markdownData={data.markdownRemark.html}/>
      </div>
    </ThemeProvider>
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
