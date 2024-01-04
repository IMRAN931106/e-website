import React from 'react';
import { HeroSection } from '../Components'

const About = () => {

  const data = {
    name: "Imran Ecommerce",
     paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente."
  }
  return (
    <HeroSection myData={data}/>
  )
}

export default About
