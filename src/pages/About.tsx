import Banner from '../assets/images/Banner/banner.jpg';
import TitleBg from '../assets/images/Title/titlebg.svg';
import ManBg from '../assets/images/About/man-green-bg.svg';
import ManStrong from '../assets/images/About/man-strong.png';
import Equipment from '../assets/images/About/equipments.png';
import Gym from '../assets/images/About/gym.png';
import Weightlifter from '../assets/images/About/weightlifter.png';
import Footer from '../components/Footer/Footer';
import Target from '../assets/images/About/target.png';

function About() {
  return (
    <section>
      <div>
        <img
          className="w-screen object-fill pt-20 lg:h-max"
          src={Banner}
          alt="banner"
        />
        <h1 className="-translate-y-10 text-center text-3xl font-bold tracking-widest text-white">
          About Us
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
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-2">
          <img className="h-16" src={Target} />
          <h1 className="text-3xl font-bold">Our History</h1>
          <p>lorem ipsum</p>
        </div>
        <div>imagem</div>
      </div>
      <div>oi</div>
      <Footer />
    </section>
  );
}

export default About;
