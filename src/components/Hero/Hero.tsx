import React from 'react';
import HeroImg from '../../assets/images/Hero/Hero-img.jpg';

function Hero() {
  return (
    <section
      className=" z-[1] h-screen w-full translate-y-24 bg-black bg-cover bg-center bg-no-repeat lg:bg-top "
      style={{ backgroundImage: `url(${HeroImg})` }}
    ></section>
  );
}

export default Hero;
