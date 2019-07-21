import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import WhyTap from '../components/home/whyTap';
import Credits from '../components/home/credits';
import {ThemeProvider} from 'styled-components';
import {graphql} from 'gatsby';
import {theme} from '../theme';
import SEO from '../components/seo';

export default ({data}) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <div>
          <Navbar/>
          <Hero/>
          <Features/>
          <WhyTap markdownData={data.markdownRemark.html}/>
          <Credits/>
        </div>
      </ThemeProvider>
    </>
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
