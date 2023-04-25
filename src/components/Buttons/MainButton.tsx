import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

interface Props {
  size?: 'sm' | 'md' | 'lg'; // size can be one of these values
  textSize?: 'sm' | 'md' | 'lg'; // textSize can be one of these values
}

function MainButton(props: Props) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // Adjust the button size based on the value of the `size` prop
  let buttonSize = 'py-2 px-4';
  if (props.size === 'sm') {
    buttonSize = 'py-1 px-2';
  } else if (props.size === 'lg') {
    buttonSize = 'py-3 px-6';
  }

  // Adjust the text size based on the value of the `textSize` prop
  let textSize = 'text-lg';
  if (props.textSize === 'sm') {
    textSize = 'text-sm';
  } else if (props.textSize === 'lg') {
    textSize = 'text-xl';
  }

  return (
    <Link onClick={goTop} to={'/classes'}>
      <div
        className={`flex bg-white ${buttonSize} items-center justify-center rounded-lg`}
      >
        <h2 className={`font-semibold text-black ${textSize}`}>CLASSES</h2>
        <ArrowSmallRightIcon className="ml-1 h-6 w-6 text-teal-500" />
      </div>
    </Link>
  );
}

export default MainButton;
