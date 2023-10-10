import React, { useEffect } from 'react'
import '../../styles/style.css';
import '../../styles/css/custom.css';
import '../../styles/css/bootstrap.min.css';

import Header from './Header'
import Content from '../home/Content'
import OurTeam from '../home/OurTeam'
import Information from './Information';
import Technologies from './Technologies';
import Clients from '../home/Clients'
import fadeInAnimation from '../../animation/fadeInAnimation';

const About = () => {
  useEffect(() => {
    // Define the elements you want to animate
    const elementsToAnimate = document.querySelectorAll('.hidden');

    // Call the fadeInAnimation function with the elements
    fadeInAnimation(elementsToAnimate);
  }, []);

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
