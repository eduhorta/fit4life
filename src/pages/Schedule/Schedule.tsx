import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';
import Banner from '../../assets/images/Banner/banner.jpg';
function Schedule() {
  return (
    <section>
      <div>
        <img
          className="w-screen object-fill pt-20 lg:h-max lg:-translate-y-12"
          src={Banner}
          alt="banner"
        />
        <h1 className="-translate-y-10 text-center text-3xl font-bold tracking-widest text-white lg:-translate-y-28 lg:text-5xl">
          Schedule
        </h1>
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}

export default Schedule;
