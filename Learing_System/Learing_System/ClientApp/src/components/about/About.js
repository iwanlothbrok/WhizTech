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
import BlogList from '../blog/BlogList';
const About = () => {
  return (
    <div>
      <Header />
      <Technologies />
      <Information />
      <Content />
      <OurTeam />
      <AskedQuestions />
      <BlogList />
    </div>
  )
}

export default About
