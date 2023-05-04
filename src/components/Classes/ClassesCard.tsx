import { ClassesList } from './ClassesList';

function ClassesCard() {
  return (
    <section className="grid grid-cols-1 justify-items-center gap-1 lg:grid-cols-3">
      {ClassesList.map((card, index) => {
        return (
          <div className="relative" key={index}>
            <img className="rounded-lg" src={card.img} />
            <div className="absolute top-0 text-white">
              <h1>{card.title}</h1>
              <p>
                {card.instructor} & {card.time}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ClassesCard;
