import React from 'react';
import Carousel from '../layout/Carousel';
import ServiceSection from './ServiceSection';
import Content from './Content';
import Categories from '../courses/Categories';
import OurTeam from './OurTeam';
import Clients from './Clients';


import '../../styles/style.css';
import '../../styles/custom.css';
import '../../styles/bootstrap.min.css';
import SmallContact from '../SmallContact';
import HomePage from './HomePage';

export default function Home() {
  return (

    <div>
      <HomePage />
      <ServiceSection/>
      <SmallContact />
    </div>
  )
}