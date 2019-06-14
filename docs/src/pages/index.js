import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import WhyTap from '../components/home/WhyTap';
import {ThemeProvider} from 'styled-components';
import {graphql} from 'gatsby';
import {theme} from '../theme';

export default ({data}) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <WhyTap markdownData={data.markdownRemark.html}/>
      </div>
    </ThemeProvider>
  );
};

export const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: {title: {eq: "why-tap"}}) {
      id
      html
    }
  }
`;
