import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Featured from '../components/Featured/Featured';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import Trainers from '../components/Trainers/Trainers';
import Pricing from '../components/Pricing/Pricing';
import Unleash from '../components/UnleashBanner/UnleashBanner';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Pricing />
      <Unleash />
      <Footer />
    </>
  );
}

export default Home;
