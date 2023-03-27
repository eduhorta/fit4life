import { Link } from 'react-router-dom';

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
        <li>
          <Link onClick={goTop} to={'/'} className="hover:text-teal-500">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={goTop} to={'/'} className="hover:text-teal-500">
            About
          </Link>
        </li>
        <li>
          <Link onClick={goTop} to={'/'} className="hover:text-teal-500">
            Gallery
          </Link>
        </li>
        <li>
          <Link onClick={goTop} to={'/'} className="hover:text-teal-500">
            Schedule
          </Link>
        </li>
        <li>
          <Link onClick={goTop} to={'/'} className="hover:text-teal-500">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={goTop} to={'/'} className="hover:text-teal-500">
            Pricing
          </Link>
        </li>
        <li>
          <Link onClick={goTop} to={'/'} className="hover:text-teal-500">
            Classes
          </Link>
        </li>
        <li>
          <Link onClick={goTop} to={'/'} className="hover:text-teal-500">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
