import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavList from './NavList';
import Logo from '../../assets/images/Logo/logo.png';
import {
  UserIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';
import SideImg1 from '../../assets/images/Sidebar/side1.jpg';
import SideImg2 from '../../assets/images/Sidebar/side2.jpg';
import SideImg3 from '../../assets/images/Sidebar/side3.jpg';

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  function hamburgerMenu() {
    setHamburger(!hamburger);
  }
  function sidebarMenu() {
    setSidebar(!sidebar);
  }
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <nav className="fixed z-[3] flex w-screen flex-row items-center justify-between bg-black py-6 px-8 shadow-xl ">
        <Link to={'/'} onClick={goTop}>
          <img src={Logo} className="h-12 rounded-full bg-white" />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="flex items-center gap-6">
          <Bars3Icon
            className="h-8 w-8 text-white lg:hidden"
            onClick={hamburgerMenu}
          />
          <Link to="/user">
            <UserIcon className="h-8 w-8 text-white hover:text-teal-500" />
          </Link>
          <InformationCircleIcon
            onClick={sidebarMenu}
            className="h-8 w-8 cursor-pointer text-white hover:text-teal-500"
          />
          <Link
            to="/contact"
            className="ml-4 mr-8 hidden cursor-pointer rounded-lg border-2 p-2 text-[16px] font-bold tracking-widest text-white hover:border-teal-500 hover:text-teal-500 lg:block"
          >
            JOIN NOW
          </Link>
          {/* Hamburger Menu */}
          <div
            className={`fixed top-0 left-0 z-[99] h-screen w-full bg-white py-32 duration-500 ease-in-out  ${
              hamburger ? 'left-0' : '-left-[100%]'
            }`}
          >
            <XMarkIcon
              onClick={() => {
                hamburgerMenu(), goTop();
              }}
              className="absolute top-16 right-16 h-8 cursor-pointer text-red-500"
            />
            <ul className="space-y-6 text-center">
              <li
                onClick={() => {
                  hamburgerMenu(), goTop();
                }}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => {
                  hamburgerMenu(), goTop();
                }}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                onClick={() => {
                  hamburgerMenu(), goTop();
                }}
              >
                <Link to="gallery/page-1">Gallery</Link>
              </li>
              <li
                onClick={() => {
                  hamburgerMenu(), goTop();
                }}
              >
                <Link to="/schedule/monday">Schedule</Link>
              </li>
              <li
                onClick={() => {
                  hamburgerMenu(), goTop();
                }}
              >
                <Link to="/blog">Blog</Link>
              </li>
              <li
                onClick={() => {
                  hamburgerMenu(), goTop();
                }}
              >
                <Link to="/pricing">Pricing</Link>
              </li>
              <li
                onClick={() => {
                  hamburgerMenu(), goTop();
                }}
              >
                <Link to="/classes">Classes</Link>
              </li>
              <li
                onClick={() => {
                  hamburgerMenu(), goTop();
                }}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 z-[999] h-screen w-full overflow-auto bg-white pt-24 pb-6 duration-500 ease-in-out lg:w-[30%] ${
              sidebar ? 'left-0' : '-left-[100%]'
            }`}
          >
            <XMarkIcon
              onClick={sidebarMenu}
              className="absolute top-16 right-16 h-8 cursor-pointer text-red-500"
            />
            <section className="mx-10 h-screen">
              <h1 className="text-lg font-bold tracking-wide">About Us</h1>
              <p className="mt-2 text-justify">
                Fit4Life is a premier fitness center dedicated to helping you
                live your healthiest life. With a focus on personalized training
                and cutting-edge equipment, we&apos;re committed to helping you
                achieve your fitness goals. Our friendly and knowledgeable staff
                are here to support you every step of the way. Come see why
                Fit4Life is the perfect place to start your fitness journey.
              </p>
              <h1 className="mt-4 text-lg font-bold tracking-wide">Gallery</h1>
              <Link
                to="/gallery/page-1"
                onClick={() => {
                  sidebarMenu(), goTop();
                }}
              >
                <div className="mt-2 grid grid-cols-3 grid-rows-1 gap-4">
                  <img
                    className="rounded-lg"
                    src={SideImg1}
                    alt="sidebar_gallery1"
                  />
                  <img
                    className="rounded-lg"
                    src={SideImg2}
                    alt="sidebar_gallery2"
                  />
                  <img
                    className="rounded-lg"
                    src={SideImg3}
                    alt="sidebar_gallery3"
                  />
                </div>
              </Link>
              {/* Contact */}
              <div className="space-y-2">
                {' '}
                <h1 className="mt-4 text-lg font-bold tracking-wide">
                  Contact
                </h1>
                <p className="flex h-6 ">
                  <MapPinIcon className="mr-2 text-teal-500" />
                  123 Main Street, Anytown
                </p>
                <p className="flex h-6">
                  <PhoneIcon className="mr-2 text-teal-500" />
                  +123-456-789
                </p>
                <p className="flex h-6 ">
                  <EnvelopeIcon className="mr-2 text-teal-500" />
                  fit4life@fit4life.com
                </p>
              </div>
              {/* Follow Us */}
              <div>
                <h1 className="mt-4 text-lg font-bold tracking-wide">
                  Follow Us
                </h1>
                <div className="mt-2 flex space-x-2">
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#14b8a6"
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#14b8a6"
                      d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48Zm60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32Z"
                    />
                  </svg>
                </div>
              </div>
            </section>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
