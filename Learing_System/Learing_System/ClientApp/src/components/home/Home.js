import React from 'react';
import Carousel from './Carousel';
import ServiceSection from './ServiceSection';
import Content from './Content';
import Categories from './Categories';
import OurTeam from './OurTeam';
import Clients from './Clients';


import '../../styles/style.css';
import '../../styles/custom.css';
import '../../styles/bootstrap.min.css';
import SmallContact from '../SmallContact';


export default function Home() {
  return (

    <div className="elementor-section elementor-top-section elementor-element elementor-element-aed028e elementor-section-full_width elementor-section-height-default elementor-section-height-default overlay-container position-relative">

      <Carousel />
      <ServiceSection />
      <Content />
      <Categories />
      <OurTeam />
      <Clients />
      <SmallContact />
    </div>
  )
}