import TitleBg from '../../assets/images/Title/titlebg.svg';
import TrainersCard from './TrainersCard';

function Trainers() {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center py-16">
        <h1 className="z-[2] bg-no-repeat text-center text-2xl font-bold text-white">
          GYM TRAINERS
        </h1>
        <img className="absolute top-14 w-96" src={TitleBg} alt="title-bg" />
        <h2 className="pt-16 pb-8 text-3xl font-bold tracking-wider">
          Team of Experts
        </h2>
        <p className="w-[16rem] text-justify text-lg text-gray-700 lg:w-[36rem] lg:text-center">
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
      </div>
      <TrainersCard />
    </section>
  );
}

export default Trainers;
