import { FeaturedList } from './FeaturedList';
import TitleBg from '../../assets/images/Title/titlebg.svg';

function Featured() {
  return (
    <section className="bg-gradient-to-t from-black via-teal-900 to-white pb-16">
      <div className="flex h-48 flex-col items-center justify-center pt-12">
        <h2
          className="w-64 text-center text-2xl font-bold text-white"
          style={{ backgroundImage: `url(${TitleBg})` }}
        >
          CLASSES
        </h2>
        <h1 className="pt-12 text-center text-4xl font-bold tracking-widest">
          WE OFFER THE BEST
        </h1>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-8 px-4 pt-12 md:grid-cols-3">
        {FeaturedList.map((card, index) => {
          return (
            <div key={index} className="relative border-2 border-teal-500">
              <img className="w-full" src={card.img} />
              <div className="absolute bottom-8 flex w-full flex-col space-y-1 bg-gray-900 bg-opacity-40 px-6  tracking-widest text-white">
                <h2 className="font-semibold">{card.title}</h2>
                <h3>{card.description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Featured;
