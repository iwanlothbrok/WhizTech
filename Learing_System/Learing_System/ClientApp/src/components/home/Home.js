import React from 'react';
import ServiceSection from './ServiceSection';
import '../../styles/style.css';
import '../../styles/css/custom.css';
import '../../styles/css/bootstrap.min.css';
import HomePage from './HomePage';
import ContactWithInformation from '../ContactWithInformation';
import AskedQuestions from '../../components/questions/AskedQuestions'

export default function Home() {
  return (

    <div>
      <HomePage />
      <ServiceSection />
      <AskedQuestions />
      <ContactWithInformation />
    </div>
  )
}