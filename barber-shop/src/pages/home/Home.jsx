import React from 'react';
import Hero from '../../components/hero/Hero';
import Info from '../../components/information/info';
import Service from '../../components/servicess/service'
import Gallery from '../../components/gallery/gallery';
import Contact from '../../components/contact/contact'
import { HomeContainer } from './Home.style';



const Home = () => {

  return (
    <div>
      <HomeContainer>
          <Hero />
          <Info />
          <Service />
          <Gallery />
          <Contact />
      </HomeContainer>

    </div>
  );
};

export default Home;
