import React from 'react';
import { Link } from 'react-router-dom';
import NavList from './NavList';
import Logo from '../../images/logo/logo.jpeg';
import { UserIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
    <>
      <nav className="fixed flex w-full flex-row items-center justify-between bg-black py-8 px-12 shadow-xl ">
        <img src={Logo} className="h-8" />
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex items-center gap-10">
          <UserIcon className="h-8 w-8 text-white" />
          <InformationCircleIcon className="h-8 w-8 text-white" />
          <h3 className="ml-4 mr-8 rounded-lg border-2 p-2 text-[16px] font-bold tracking-widest text-white min620:hidden">
            JOIN NOW
          </h3>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
