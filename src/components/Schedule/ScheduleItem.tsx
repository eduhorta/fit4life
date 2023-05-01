import { Link } from 'react-router-dom';

interface Props {
  className: string;
  time: string;
  trainer: string;
}

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function ScheduleItem(props: Props) {
  const { className, time, trainer } = props;

  return (
    <ul className="flex w-full flex-col justify-center text-center lg:flex-row">
      <li className="w-full bg-[#f2f2f2] py-[25px] px-[55px] text-start">
        <p className="text-center text-[14px] font-medium text-[#a0a0a0]">
          Class Name
        </p>
        <p className="mt-3 text-center text-[18px] font-bold text-black">
          {className}
        </p>
      </li>
      <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
        <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
        <p className="mt-3 text-[18px] font-bold text-black">{time}</p>
      </li>
      <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
        <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
        <p className="mt-3 text-[18px] font-bold text-black">{trainer}</p>
      </li>
      <li className="flex w-full items-center justify-center bg-[#f2f2f2] py-[25px] px-[55px]">
        <Link
          onClick={goTop}
          to="/contact"
          className="rounded-[30px] bg-[#555] py-[10px] px-[20px] text-[15px] font-medium text-white duration-200 ease-in hover:bg-[#0f766e]  "
        >
          Join Now
        </Link>
      </li>
    </ul>
  );
}

export default ScheduleItem;
