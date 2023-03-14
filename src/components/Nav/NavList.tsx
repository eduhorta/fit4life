import React from 'react';

function NavList() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-[16px] font-medium text-white">
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Schedule</li>
        <li>Blog</li>
        <li>Pricing</li>
        <li>Classes</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default NavList;
