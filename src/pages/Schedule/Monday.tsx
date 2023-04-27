import { Link } from 'react-router-dom';

function Monday() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Filter day buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/schedule/monday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] bg-[#0f766e] py-[9px] px-[32px] text-[15px] font-bold text-white duration-200 ease-in hover:shadow-2xl "
        >
          Monday
        </Link>

        <Link
          to="/schedule/tuesday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] py-[9px] px-[32px] text-[15px] font-bold duration-200 ease-in hover:bg-[#0f766e] hover:text-white hover:shadow-2xl "
        >
          Tuesday
        </Link>

        <Link
          to="/schedule/wednesday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] py-[9px] px-[32px] text-[15px] font-bold duration-200 ease-in hover:bg-[#0f766e] hover:text-white hover:shadow-2xl "
        >
          Wednesday
        </Link>

        <Link
          to="/schedule/thursday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] py-[9px] px-[32px] text-[15px] font-bold duration-200 ease-in hover:bg-[#0f766e] hover:text-white hover:shadow-2xl "
        >
          Thursday
        </Link>

        <Link
          to="/schedule/friday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] py-[9px] px-[32px] text-[15px] font-bold duration-200 ease-in hover:bg-[#0f766e] hover:text-white hover:shadow-2xl "
        >
          Friday
        </Link>

        <Link
          to="/schedule/saturday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] py-[9px] px-[32px] text-[15px] font-bold duration-200 ease-in hover:bg-[#0f766e] hover:text-white hover:shadow-2xl "
        >
          Saturday
        </Link>

        <Link
          to="/schedule/sunday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] py-[9px] px-[32px] text-[15px] font-bold duration-200 ease-in hover:bg-[#0f766e] hover:text-white hover:shadow-2xl "
        >
          Sunday
        </Link>
      </div>

      {/* ---- */}

      {/* boxes */}
      <div className="mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <ul className="flex w-full flex-col justify-between text-center lg:flex-row">
            {/* class name */}
            <li className="w-full bg-[#f2f2f2] py-[25px] px-[55px] text-start">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="mt-3 text-[18px] font-bold text-black">Fitness</p>
            </li>
            {/* time */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                9:00am - 10:00am
              </p>
            </li>
            {/* trainer */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                David Vila
              </p>
            </li>
            <li className="min800:justify-center flex w-full items-center  justify-end bg-[#f2f2f2] py-[25px] px-[55px]">
              <Link
                onClick={goTop}
                to="/contact"
                className="rounded-[30px] bg-[#555] py-[10px] px-[20px] text-[15px] font-medium text-white duration-200 ease-in hover:bg-[#0f766e]  "
              >
                Join Now
              </Link>
            </li>
          </ul>
          {/* row */}
          <ul className="min800:flex-col min800:text-center flex w-full justify-between">
            {/* class name */}
            <li className="w-full bg-[#f2f2f2] py-[25px] px-[55px]">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="mt-3 text-[18px] font-bold text-black">
                Body Building
              </p>
            </li>
            {/* time */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                10:00pm - 11:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                John Weights
              </p>
            </li>
            <li className="min800:justify-center flex w-full items-center justify-end bg-[#f2f2f2] py-[25px] px-[55px]">
              <Link
                onClick={goTop}
                to="/contact"
                className="mt-3 rounded-[30px] bg-[#555] py-[10px] px-[20px] text-[15px] font-medium text-white duration-200 ease-in hover:bg-[#0f766e] "
              >
                Join Now
              </Link>
            </li>
          </ul>
          {/* row */}
          <ul className="min800:flex-col min800:text-center flex w-full justify-between">
            {/* class name */}
            <li className="w-full bg-[#f2f2f2] py-[25px] px-[55px]">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="mt-3 text-[18px] font-bold text-black">Running</p>
            </li>
            {/* time */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                4:00pm - 5:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                Junifor Jonas
              </p>
            </li>
            <li className="min800:justify-center flex w-full items-center justify-end bg-[#f2f2f2] py-[25px] px-[55px]">
              <Link
                onClick={goTop}
                to="/contact"
                className="mt-3 rounded-[30px] bg-[#555] py-[10px] px-[20px] text-[15px] font-medium text-white duration-200 ease-in hover:bg-[#0f766e] "
              >
                Join Now
              </Link>
            </li>
          </ul>
          {/* row */}
          <ul className="min800:flex-col min800:text-center flex w-full justify-between">
            {/* class name */}
            <li className="w-full bg-[#f2f2f2] py-[25px] px-[55px]">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="mt-3 text-[18px] font-bold text-black">Cycling</p>
            </li>
            {/* time */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                6:00pm - 7:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                Robert Louis
              </p>
            </li>
            <li className="min800:justify-center flex w-full items-center justify-end bg-[#f2f2f2] py-[25px] px-[55px]">
              <Link
                onClick={goTop}
                to="/contact"
                className="mt-3 rounded-[30px] bg-[#555] py-[10px] px-[20px] text-[15px] font-medium text-white duration-200 ease-in hover:bg-[#0f766e] "
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Monday;
