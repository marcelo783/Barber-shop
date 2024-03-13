import React from 'react';
import Hero from '../../components/hero/Hero';
import { HomeContainer } from './Home.style';


const Home = () => {

  return (
    <div>
      <HomeContainer>
          <Hero />
      </HomeContainer>

    </div>
  );
};

export default Home;
