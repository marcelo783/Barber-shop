import React from 'react';
import Hero from '../../components/hero/Hero';
import Info from '../../components/information/info';
import Service from '../../components/servicess/service'
import Gallery from '../../components/gallery/gallery';
import { HomeContainer } from './Home.style';



const Home = () => {

  return (
    <div>
      <HomeContainer>
          <Hero />
          <Info />
          <Service />
          <Gallery />
      </HomeContainer>

    </div>
  );
};

export default Home;
