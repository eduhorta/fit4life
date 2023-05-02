import Banner from '../assets/images/Banner/banner.jpg';
import BlogPost from '@/components/Blog/BlogPost';
import Magnify from '../assets/images/Blog/magnify.svg';
import Categories from '@/components/Blog/Categories';
import RecentBlog from '@/components/Blog/RecentBlog';
import Footer from '@/components/Footer/Footer';
import Merch from '../assets/images/Blog/merch.png';

function Blog() {
  return (
    <section>
      <div>
        <img
          className="w-screen object-fill pt-20 lg:h-max lg:-translate-y-12"
          src={Banner}
          alt="banner"
        />
        <h1 className="-translate-y-10 text-center text-3xl font-bold tracking-widest text-white lg:-translate-y-28 lg:text-5xl">
          Blog
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-8 bg-gradient-to-b from-white lg:grid-cols-2 lg:px-64">
        <main className="flex-1">
          <BlogPost />
        </main>
        <aside className="mx-4 flex flex-col lg:w-96">
          <form className="flex">
            <input className="h-8 w-full rounded-l-lg border-2 border-solid border-[#0f766e]"></input>
            <button>
              <img
                className="h-8 rounded-r-lg bg-[#0f766e]"
                src={Magnify}
                alt="magnify"
              />
            </button>
          </form>
          <Categories />
          <RecentBlog />
          <div className="my-4 space-y-2 bg-gray-500/10 p-4">
            <h1 className="text-lg font-semibold">Popular Tags</h1>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <p className="rounded-lg bg-[#0f766e]/10 p-1">#Crossfit</p>
              <p className="rounded-lg bg-[#0f766e]/10 p-1">#Fitness</p>
              <p className="rounded-lg bg-[#0f766e]/10 p-1">#Gym</p>
              <p className="rounded-lg bg-[#0f766e]/10 p-1">#Meditation</p>
              <p className="rounded-lg bg-[#0f766e]/10 p-1">#Running</p>
              <p className="rounded-lg bg-[#0f766e]/10 p-1">#Workout</p>
              <p className="rounded-lg bg-[#0f766e]/10 p-1">#Yoga</p>
              <p className="rounded-lg bg-[#0f766e]/10 p-1">#Boxing</p>
            </div>
          </div>
          <div>
            <img className="object-contain" src={Merch} />
          </div>
        </aside>
      </div>
      <Footer />
    </section>
  );
}

export default Blog;
