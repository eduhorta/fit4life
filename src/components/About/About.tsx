import AboutCards from './AboutCards';
import TitleBg from '../../assets/images/Title/titlebg.svg';
import GirlSmile from '../../assets/images/About/girl-smile.png';
import ManBg from '../../assets/images/About/man-green-bg.svg';
import ManStrong from '../../assets/images/About/man-strong.png';

function About() {
  return (
    <section className="bg-[#0f766e] bg-opacity-10">
      <div className="mt-8 gap-16 space-y-8  text-white lg:flex lg:justify-center lg:space-y-0">
        <AboutCards />
      </div>
      <div className="mx-14 flex flex-col py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-center lg:w-3/5">
          <p
            className="my-6 w-64 text-center text-lg font-bold text-white"
            style={{ backgroundImage: `url(${TitleBg})` }}
          >
            WHO WE ARE
          </p>
          <h2 className="py-4 text-center text-3xl font-bold">
            Take your body to the next level
          </h2>
          <p className="py-4 text-justify text-lg text-gray-500 lg:text-center">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
        </div>
        <div className="lg:w-3/5">
          <img
            className="hidden rounded-2xl bg-right-top bg-no-repeat lg:block"
            src={ManStrong}
            style={{ backgroundImage: `url(${ManBg})` }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
