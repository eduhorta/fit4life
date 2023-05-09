import { PricingList } from './PricingList';
import { Link } from 'react-router-dom';

function PricingCard() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 px-2 shadow-2xl drop-shadow-2xl lg:flex-row lg:px-0">
      {PricingList.map((card, index) => {
        return (
          <div key={index}>
            <div className="relative flex flex-col items-center justify-center text-center">
              <img src={card.img} />
              <h1 className="absolute bottom-0 z-[4] w-48 bg-white py-2 text-2xl font-semibold">
                {card.name}
              </h1>
            </div>
            <div className="flex h-[30rem] flex-col items-center justify-items-center bg-white pt-2 drop-shadow-2xl">
              <p className="py-4 text-3xl text-black">
                ${card.price}
                <span className="text-lg text-gray-700">/m</span>
              </p>
              <ul className="list-disc space-y-4">
                {card.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                onClick={goTop}
                className="absolute bottom-2 rounded-lg bg-[#0f766e] py-2 px-4 font-semibold tracking-wide text-white"
              >
                Subscribe
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default PricingCard;
