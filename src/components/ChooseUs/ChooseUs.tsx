import ChooseUsBanner from './ChooseUsBanner';
import ChooseBg from '../../assets/images/ChooseUs/choose-bg.jpg';
import GirlWorkout from '../../assets/images/ChooseUs/girl-workout.png';
import TitleBg from '../../assets/images/Title/titlebg.svg';
import { chooseUsList } from './ChooseUsList';

function ChooseUs() {
  return (
    <section>
      <ChooseUsBanner />
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-900 lg:flex-row">
        <div>
          <img src={GirlWorkout} />
        </div>
        <div className="flex w-72 flex-col items-center justify-center gap-8 py-24 lg:w-[480px]">
          <h1
            className="w-64 text-center text-2xl font-bold text-white"
            style={{ backgroundImage: `url(${TitleBg})` }}
          >
            WHY CHOOSE US
          </h1>
          <p className="text-justify text-2xl font-bold text-white">
            We Can Give A Shape Of Your Body Here!
          </p>
          <p className="text-justify text-lg text-gray-400">
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="grid w-96 grid-cols-1 gap-8 space-y-8 py-4 text-white lg:grid-cols-2">
            {chooseUsList.map((card, index) => {
              return (
                <div key={index}>
                  <img src={card.img} />
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
