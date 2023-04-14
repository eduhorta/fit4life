import { FeaturedList } from './FeaturedList';
import TitleBg from '../../assets/images/Title/titlebg.svg';

function Featured() {
  return (
    <div className="bg-gradient-to-t from-black via-teal-900 to-white pb-16">
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
      <div className="grid grid-cols-1 gap-8 px-4 pt-12 md:grid-cols-3">
        {FeaturedList.map((card, index) => {
          return (
            <div key={index} className="relative border-2 border-teal-500">
              <img className="w-full" src={card.img} />
              <div className="absolute bottom-8 left-8 flex flex-col items-center justify-center">
                <h2 className="text-white">{card.title}</h2>
                <h3 className="text-white">{card.description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
