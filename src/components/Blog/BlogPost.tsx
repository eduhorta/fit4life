import { BlogList } from './BlogList';
import Stack from '../../assets/images/Blog/stack-fill.svg';

function BlogPost() {
  return (
    <>
      {BlogList.map((card, index) => {
        return (
          <section className="mx-4 mb-8 space-y-4 lg:mx-0" key={index}>
            <div>
              <img className="rounded-lg object-contain" src={card.img} />
            </div>
            <div className="flex">
              <img className="mr-2" src={Stack} />
              <h2 className="flex text-xs text-zinc-700">{card.posted}</h2>
            </div>
            <h1 className="text-2xl font-semibold text-zinc-800">
              {card.title}
            </h1>
            <p className="text-justify">{card.description}</p>
            <button className="rounded-lg bg-[#0f766e] p-2 font-semibold tracking-widest text-white hover:bg-[#0f766e]/80">
              READ MORE
            </button>
          </section>
        );
      })}
    </>
  );
}

export default BlogPost;
