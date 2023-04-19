import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Featured from '../components/Featured/Featured';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import Trainers from '../components/Trainers/Trainers';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
    </>
  );
}

export default Home;
