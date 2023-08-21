import React from 'react'
import '../../styles/style.css';
import '../../styles/custom.css';
import '../../styles/bootstrap.min.css';

import Header from './Header'
import ServiceSection from '../home/ServiceSection'
import Content from '../home/Content'
import OurTeam from '../home/OurTeam'
import Information from './Information';

const About = () => {
  return (
    <div>
      <Header />
      <Information />
      <ServiceSection />
      <Content />
      <OurTeam />
    </div>
  )
}

export default About
