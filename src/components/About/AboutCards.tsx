import { aboutList } from './AboutList';

function AboutCards() {
  return (
    <>
      {aboutList.map((card, index) => {
        return (
          <div
            className="mx-8 flex h-72 -translate-y-8 flex-col items-center justify-center rounded-tr-3xl rounded-bl-3xl border-2 bg-white shadow-2xl lg:w-96"
            key={index}
          >
            <img src={`${card.img}`} alt="activity-icon" className="mb-2" />
            <p className="text-center text-2xl font-bold text-black">
              {card.title}
            </p>
            <p className="mx-8 mt-8 text-justify text-black">
              {card.description}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default AboutCards;
