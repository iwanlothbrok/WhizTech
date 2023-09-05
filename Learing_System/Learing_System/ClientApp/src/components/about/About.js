import React from 'react'
import '../../styles/style.css';
import '../../styles/css/custom.css';
import '../../styles/css/bootstrap.min.css';

import Header from './Header'
import Content from '../home/Content'
import OurTeam from '../home/OurTeam'
import Information from './Information';
import AskedQuestions from '../questions/AskedQuestions';
import Technologies from './Technologies';
import BlogList from '../blog/BlogList';
import LanguageInformation from '../languages/LanguageInformation';
const About = () => {
  return (
    <div>
      <Header />
      <Content />
      <Technologies />
      <Information />
      <LanguageInformation/>
      <OurTeam />
  
    </div>
  )
}

export default About
