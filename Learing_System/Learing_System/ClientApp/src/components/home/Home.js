import React from 'react';
import ServiceSection from './ServiceSection';
import '../../styles/style.css';
import '../../styles/css/custom.css';
import '../../styles/css/bootstrap.min.css';
import SmallContact from '../SmallContact';
import HomePage from './HomePage';
import Check from '../Check';


export default function Home() {
  return (

    <div>
      <HomePage />
      <ServiceSection />
      <Check/>
    </div>
  )
}