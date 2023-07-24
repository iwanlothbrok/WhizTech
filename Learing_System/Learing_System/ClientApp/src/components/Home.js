import React, { Component } from 'react';
import NavMenu from './home/NavMenu';
import Carousel from './home/Carousel';
import ServiceSection from './home/ServiceSection';
import Content from './home/Content';
import Categories from './home/Categories';
import OurTeam from './home/OurTeam';
import Clients from './home/Clients';
import Footer from './home/Footer';
import '../styles/style.css';
import '../styles/custom.css';
import '../styles/bootstrap.min.css';

export default function Home() {
  return (

    <>
      <NavMenu />
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