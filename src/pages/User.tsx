import React from 'react';
import Banner from '../assets/images/Banner/banner.jpg';
import Footer from '@/components/Footer/Footer';

function User() {
  return (
    <section>
      <div>
        <img
          className="w-screen object-fill pt-20 lg:h-max lg:-translate-y-12"
          src={Banner}
          alt="banner"
        />
        <h1 className="-translate-y-10 text-center text-3xl font-bold tracking-widest text-white lg:-translate-y-28 lg:text-5xl">
          Sign In
        </h1>
      </div>
      <form className="mx-96 flex h-96 flex-col items-center justify-center rounded-md bg-zinc-900">
        <label className="text-white">E-mail</label>
        <input type="text" placeholder="fit4life@fit4life.com"></input>
        <label className="text-white">Password</label>
        <input placeholder="password"></input>
        <button>Sign In</button>
        <h2 className="text-white">
          Don&apos;t have an account? <span>Sign Up</span>
        </h2>
      </form>
      <Footer />
    </section>
  );
}

export default User;
