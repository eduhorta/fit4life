import Banner from '../assets/images/Banner/banner.jpg';
import Footer from '../components/Footer/Footer';
import PricingComponent from '../components/Pricing/Pricing';

function Pricing() {
  return (
    <section>
      <div>
        <img
          className="w-screen object-fill pt-20 lg:h-max lg:-translate-y-12"
          src={Banner}
          alt="banner"
        />
        <h1 className="-translate-y-10 text-center text-3xl font-bold tracking-widest text-white lg:-translate-y-28 lg:text-5xl">
          Pricing
        </h1>
      </div>
      <div className="-translate-y-8 lg:-translate-y-24">
        <PricingComponent />
      </div>
      <Footer />
    </section>
  );
}

export default Pricing;
