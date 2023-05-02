import Banner from '../assets/images/Banner/banner.jpg';
import TitleBg from '../assets/images/Title/titlebg.svg';
import ManBg from '../assets/images/About/man-green-bg.svg';
import ManStrong from '../assets/images/About/man-strong.png';
import Equipment from '../assets/images/About/equipments.png';
import Gym from '../assets/images/About/gym.png';
import Weightlifter from '../assets/images/About/weightlifter.png';
import Footer from '../components/Footer/Footer';
import Target from '../assets/images/About/target.png';
import Mountain from '../assets/images/About/mountain.png';
import GymExercise from '../assets/images/About/exercise-gym.jpg';
import GymLowAngle from '../assets/images/About/gym-low-angle.jpg';

function About() {
  return (
    <section>
      <div>
        <img
          className="w-screen object-fill pt-20 lg:h-max lg:-translate-y-12"
          src={Banner}
          alt="banner"
        />
        <h1 className="-translate-y-10 text-center text-3xl font-bold tracking-widest text-white lg:-translate-y-28 lg:text-5xl">
          About
        </h1>
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
          <p className="mb-12 py-4 text-justify text-lg text-gray-500 lg:mb-4 lg:w-[26rem] lg:text-center">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex flex-col gap-20 lg:flex-row">
            <div className="flex flex-col items-center justify-center">
              <img className="h-16" src={Weightlifter} />
              <h2 className="mt-4 text-center font-bold">
                PROFESSIONAL <br /> TRAINERS
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img className="h-16" src={Equipment} />
              <h2 className="mt-4 text-center font-bold">
                MODERN <br /> EQUIPMENTS
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img className="h-16" src={Gym} />
              <h2 className="mt-4 text-center font-bold">
                LATEST GYM <br /> MACHINES
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:w-3/5">
          <img
            className="hidden rounded-2xl bg-right-top bg-no-repeat lg:block"
            src={ManStrong}
            style={{ backgroundImage: `url(${ManBg})` }}
          />
        </div>
      </div>
      <div className="mx-8 mt-20 flex flex-col items-center justify-center shadow-2xl lg:mx-48 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-2 lg:w-1/2">
          <img className="h-32 pt-8" src={Target} />
          <h1 className="text-3xl font-bold">Our Target</h1>
          <p className="p-4 text-justify">
            Fit4Life is a gym that is dedicated to helping individuals improve
            their overall health and fitness. Our target is to provide a
            welcoming and inclusive environment for people of all fitness levels
            to achieve their goals.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={GymExercise} />
        </div>
      </div>
      <div className="mx-8 flex flex-col items-center justify-center shadow-2xl drop-shadow-2xl lg:mx-48 lg:flex-row">
        <div className="order-last lg:order-first lg:w-1/2">
          <img src={GymLowAngle} />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 lg:w-1/2">
          <img className="h-32 pt-8" src={Mountain} />
          <h1 className="text-3xl font-bold">Climb to the top</h1>
          <p className="p-4 text-justify">
            Climbing to the top is not just about physical strength, but also
            about determination and perseverance. At Fit4Life Gym, we understand
            the importance of these qualities when it comes to reaching your
            fitness goals. That`&apos;`s why our experienced trainers are
            dedicated to guiding you every step of the way.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default About;
