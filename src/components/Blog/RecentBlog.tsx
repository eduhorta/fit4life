import { BlogList } from './BlogList';

function RecentBlog() {
  return (
    <main className="flex flex-col space-y-4 bg-gray-500/10 p-4">
      <h1 className="text-lg font-semibold">Recent Posts</h1>
      {BlogList.map((card, index) => {
        return (
          <section
            className="flex items-center justify-center gap-2 rounded-lg"
            key={index}
          >
            <img className="w-24 rounded-lg object-contain" src={card.img} />
            <div className="flex w-full flex-col">
              <h2 className="text-xs text-zinc-500">{card.date}</h2>
              <h1>{card.title}</h1>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default RecentBlog;
