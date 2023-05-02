import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="my-4 flex flex-col gap-4 rounded-lg bg-gray-500/10 p-6">
      <h2 className="text-lg font-semibold">Categories</h2>
      <Link
        to=""
        className="border-b-2 border-zinc-700/20 hover:border-[#0f766e]"
      >
        Body Building
      </Link>
      <Link
        to=""
        className="border-b-2 border-zinc-700/20 hover:border-[#0f766e]"
      >
        Boxing
      </Link>
      <Link
        to=""
        className="border-b-2 border-zinc-700/20 hover:border-[#0f766e]"
      >
        Crossfit
      </Link>
      <Link
        to=""
        className="border-b-2 border-zinc-700/20 hover:border-[#0f766e]"
      >
        Fitness
      </Link>
      <Link
        to=""
        className="border-b-2 border-zinc-700/20 hover:border-[#0f766e]"
      >
        Meditation
      </Link>
      <Link
        to=""
        className="border-b-2 border-zinc-700/20 hover:border-[#0f766e]"
      >
        Yoga
      </Link>
    </div>
  );
}

export default Categories;
