import React from 'react'
import '../../styles/style.css';
import '../../styles/custom.css';
import '../../styles/bootstrap.min.css';

import Header from './Header'
import ServiceSection from '../home/ServiceSection'
import Content from '../home/Content'
import OurTeam from '../home/OurTeam'
import Information from './Information';
import AskedQuestions from '../questions/AskedQuestions';
import Technologies from './Technologies';

const About = () => {
  return (
    <div>
      <Header />
      <Information />
      <Technologies />
      <Content />
      <OurTeam />
      <AskedQuestions />
    </div>
  )
}

export default About
