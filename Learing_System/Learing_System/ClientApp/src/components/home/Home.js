import React from 'react';
import ServiceSection from './ServiceSection';
import '../../styles/style.css';
import '../../styles/custom.css';
import '../../styles/bootstrap.min.css';
import SmallContact from '../SmallContact';
import HomePage from './HomePage';


export default function Home() {
  return (

    <div>
      <HomePage />
      <ServiceSection />
      <SmallContact />
    </div>
  )
}