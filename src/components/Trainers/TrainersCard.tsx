import { TrainersList } from './TrainersList';
import TrainerBg from '../../assets/images/Trainers/trainer-bg.png';
import WhatsApp from '../../assets/images/Trainers/whatsapp.svg';
import Instagram from '../../assets/images/Trainers/instagram.svg';

function TrainersCard() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 lg:flex-row">
      {TrainersList.map((card, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center shadow-2xl"
          >
            <div
              className="mx- bg-no-repeat"
              style={{ backgroundImage: `url(${TrainerBg})` }}
            >
              <img
                className="h-[22rem] w-[22rem] object-contain"
                src={card.img}
              />
            </div>
            <p>{card.name}</p>
            <p>{card.description}</p>
            <div className="flex gap-4 py-2">
              <img className="h-6" src={Instagram} />
              <img className="h-6" src={WhatsApp} />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TrainersCard;
