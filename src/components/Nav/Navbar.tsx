import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavList from './NavList';
import Logo from '../../images/logo/logo.jpeg';
import {
  UserIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  function hamburgerMenu() {
    setHamburger(!hamburger);
  }

  return (
    <>
      <nav className="fixed flex w-full flex-row items-center justify-between bg-black py-8 px-8 shadow-xl ">
        <img src={Logo} className="h-8" />
        <div className="md1200:hidden">
          <NavList />
        </div>
        <div className="flex items-center gap-6">
          <Bars3Icon
            className="hidden h-8 w-8 text-white md1200:block"
            onClick={hamburgerMenu}
          />
          <UserIcon className="h-8 w-8 text-white" />
          <InformationCircleIcon className="h-8 w-8 text-white" />
          <h3 className="ml-4 mr-8 rounded-lg border-2 p-2 text-[16px] font-bold tracking-widest text-white min620:hidden">
            JOIN NOW
          </h3>
          {/* Hamburger Menu */}
          <div
            className={`fixed top-0 left-0 z-[99] h-screen w-full bg-white py-32 duration-500 ease-in-out  ${
              hamburger ? 'left-0' : '-left-[100%]'
            }`}
          >
            <XMarkIcon
              onClick={hamburgerMenu}
              className="absolute top-16 right-16 h-8"
            />
            <ul className="space-y-6 text-center">
              <li onClick={hamburgerMenu}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={hamburgerMenu}>
                <Link to="/">About</Link>
              </li>
              <li onClick={hamburgerMenu}>
                <Link to="/">Gallery</Link>
              </li>
              <li onClick={hamburgerMenu}>
                <Link to="/">Schedule</Link>
              </li>
              <li onClick={hamburgerMenu}>
                <Link to="/">Blog</Link>
              </li>
              <li onClick={hamburgerMenu}>
                <Link to="/">Pricing</Link>
              </li>
              <li onClick={hamburgerMenu}>
                <Link to="/">Classes</Link>
              </li>
              <li onClick={hamburgerMenu}>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
