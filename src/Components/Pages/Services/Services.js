import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree } from './Data';
import Pricing from '../../Pricing';

const Services = () => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;