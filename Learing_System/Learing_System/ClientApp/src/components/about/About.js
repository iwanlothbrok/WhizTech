import React from 'react'
import '../../styles/style.css';
import '../../styles/css/custom.css';
import '../../styles/css/bootstrap.min.css';

import Header from './Header'
import Content from '../home/Content'
import OurTeam from '../home/OurTeam'
import Information from './Information';
import Technologies from './Technologies';
import Clients from '../home/Clients'
const About = () => {
  return (
    <div>
      <Header />
      <Technologies />
      <Information />
      <OurTeam />
      <Clients />
    </div>

  )
}

export default About
