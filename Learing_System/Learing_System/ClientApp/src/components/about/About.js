import React from 'react'
import '../../styles/style.css';
import '../../styles/custom.css';
import '../../styles/bootstrap.min.css';

import Header from './Header'
import NavMenu from '../home/NavMenu'
import ServiceSection from '../home/ServiceSection'
import Content from '../home/Content'
import OurTeam from '../home/OurTeam'
import Footer from '../home/Footer'

const About = () => {
  return (
    <div>
      <NavMenu />
      <Header />
      <ServiceSection />
      <Content />
      <OurTeam />
      <Footer />
    </div>
  )
}

export default About
