import React from 'react';
import ServiceSection from './ServiceSection';
import '../../styles/style.css';
import '../../styles/css/custom.css';
import '../../styles/css/bootstrap.min.css';
import HomePage from './HomePage';
import ContactWithInformation from '../ContactWithInformation';
import AskedQuestions from '../../components/questions/AskedQuestions'
import Clients from './Clients';
import { useEffect } from 'react';
import fadeInAnimation from '../../animation/fadeInAnimation';
import BasicContact from '../contact/BasicContact';
export default function Home() {

  useEffect(() => {
    // Define the elements you want to animate
    const elementsToAnimate = document.querySelectorAll('.hidden');

    // Call the fadeInAnimation function with the elements
    fadeInAnimation(elementsToAnimate);
  }, []); // 
  return (

    <div>
      <HomePage />
      <ServiceSection />
      <AskedQuestions />
      <Clients />
      <BasicContact />
    </div>
  )
}