import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Carousel from './Carousel';
import ServiceSection from './ServiceSection';
import Content from './Content';
import Categories from './Categories';
import OurTeam from './OurTeam';
import Clients from './Clients';
import Footer from './Footer';
import '../../styles/style.css';
import '../../styles/custom.css';
import '../../styles/bootstrap.min.css';


export default function Home() {
  return (

    <>
      <Carousel />
      <ServiceSection />
      <Content />
      <Categories />
      <OurTeam />
      <Clients />
      <Footer />
    </>
  )
}