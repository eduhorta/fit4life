import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

function MainButton() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link onClick={goTop} to={'/classes'}>
      <div className="flex bg-white py-2 px-4 text-center font-semibold text-black">
        CLASSES <ArrowSmallRightIcon className="ml-1 h-6 w-6 text-teal-500" />
      </div>
    </Link>
  );
}

export default MainButton;
