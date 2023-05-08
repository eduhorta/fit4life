import { ClassesList } from './ClassesList';
import { UserIcon } from '@heroicons/react/24/solid';
import { ClockIcon } from '@heroicons/react/24/solid';

function ClassesCard() {
  return (
    <section className="grid -translate-y-8 grid-cols-1 gap-6 p-4 shadow-2xl drop-shadow-lg md:grid-cols-2 lg:-translate-y-20 lg:grid-cols-3 lg:py-4 lg:px-[16rem]">
      {ClassesList.map((card, index) => {
        return (
          <div className="relative shadow-lg" key={index}>
            <img className="rounded-2xl " src={card.img} />
            <div className="absolute bottom-12 w-full bg-gray-900/50 px-4 text-white lg:px-8">
              <h1 className="border-b-2 border-[#0f766e] text-2xl font-semibold text-zinc-100">
                {card.title}
              </h1>
              <p className="flex items-center justify-start text-zinc-100">
                <UserIcon className="mr-1 h-4" />
                {card.instructor} <ClockIcon className="ml-2 mr-1 h-4" />{' '}
                {card.time}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ClassesCard;
