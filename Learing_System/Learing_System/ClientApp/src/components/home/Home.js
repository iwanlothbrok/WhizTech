import React from 'react';
import Carousel from './Carousel';
import ServiceSection from './ServiceSection';
import Content from './Content';
import Categories from './Categories';
import OurTeam from './OurTeam';
import Clients from './Clients';
import Footer from './Footer';
import Contact from '../Contact';

import '../../styles/style.css';
import '../../styles/custom.css';
import '../../styles/bootstrap.min.css';
import SmallContact from '../SmallContact';


export default function Home() {
  return (

    <React.Fragment>
      <Carousel />
      <ServiceSection />
      <Content />
      <Categories />
      <OurTeam />
      <Clients />
      <Contact />
      <SmallContact />
      <Footer />
    </React.Fragment>
  )
}