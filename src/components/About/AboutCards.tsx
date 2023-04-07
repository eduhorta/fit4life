import { aboutList } from './AboutList';

function AboutCards() {
  console.log('render');
  return (
    <>
      {aboutList.map((card, id) => {
        <div
          key={id}
          className="bg-white
        "
        >
          oi
        </div>;
      })}
    </>
  );
}

export default AboutCards;
