import TitleBg from '../../assets/images/Title/titlebg.svg';
import HeroImg from '../../assets/images/Hero/Hero-img.jpg';
import MainButton from '../Buttons/MainButton';

function Hero() {
  return (
    <section
      className="flex h-screen w-full translate-y-24 items-center justify-evenly bg-black bg-cover bg-center bg-no-repeat lg:bg-top "
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="mb-48 flex flex-col items-center justify-center space-y-4 text-white">
        <div>
          <p
            className="text-center text-2xl"
            style={{ backgroundImage: `url(${TitleBg})` }}
          >
            UNLEASH YOUR ENERGY
          </p>
        </div>
        <h1 className="text-center text-3xl font-bold tracking-wide">
          TRANSFORM YOUR BODY
        </h1>
        <h2 className="text-center text-2xl tracking-widest">
          STRONGER EVERYDAY
        </h2>
        <MainButton />
      </div>
    </section>
  );
}

export default Hero;
