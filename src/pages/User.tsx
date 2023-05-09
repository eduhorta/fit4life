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
      <form className="mx-4 flex h-96 flex-col items-center justify-center space-y-4 rounded-md bg-zinc-900 lg:mx-96">
        <label className="text-2xl text-white">E-mail</label>
        <input
          className="h-10"
          type="text"
          placeholder="fit4life@fit4life.com"
        ></input>
        <label className="text-2xl text-white">Password</label>
        <input className="h-10" placeholder="password"></input>
        <button className="rounded-md bg-[#0f766e] px-4 py-2 text-lg text-white hover:bg-[#0f766e]/80">
          Sign In
        </button>
        <h2 className="text-sm text-white">
          Don&apos;t have an account?{' '}
          <span className="font-black text-[#0f766e]">Sign Up</span>
        </h2>
      </form>
      <Footer />
    </section>
  );
}

export default User;
