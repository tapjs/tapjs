import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';

export default () => {
  // console.log(data)
  console.log('hello')
  return (
    <>
    <Navbar/>
      <Hero/>
      <Features/>
      hello this is the home page
    </>
  )
}
