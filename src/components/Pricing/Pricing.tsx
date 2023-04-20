import PricingCard from './PricingCard';
import TitleBg from '../../assets/images/Title/titlebg.svg';
import PricingBg from '../../assets/images/Pricing/background.jpg';

function Pricing() {
  return (
    <section className="pt-24" style={{ backgroundImage: `url(${PricingBg})` }}>
      <div className="relative flex flex-col items-center justify-center space-y-4">
        <h1 className="z-[2] text-lg font-semibold text-white">PRICING</h1>
        <img className="absolute -top-5" src={TitleBg} />
        <h2 className="pt-14 text-3xl font-bold tracking-widest">
          Exclusive Plan
        </h2>
        <p className="w-[18rem] px-2 text-justify text-gray-600 lg:mx-0 lg:w-[48rem]">
          Our gym offers flexible pricing plans to suit your needs, including
          monthly memberships, annual memberships, and pay-per-visit options.
          With affordable prices, you can have access to our state-of-the-art
          fitness center, personalized training programs, and group classes.
        </p>
      </div>
      <PricingCard />
    </section>
  );
}

export default Pricing;
