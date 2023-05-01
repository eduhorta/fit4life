import { Link } from 'react-router-dom';

interface Props {
  day: string;
  active: boolean;
}

function ScheduleDays(props: Props) {
  const { day, active } = props;
  const buttonClass = active
    ? 'rounded-[23px] border border-solid border-[#d7d7d7] bg-[#0f766e] py-[9px] px-[32px] text-[15px] font-bold text-white duration-200 ease-in hover:shadow-2xl'
    : 'rounded-[23px] border border-solid border-[#d7d7d7] py-[9px] px-[32px] text-[15px] font-bold duration-200 ease-in hover:bg-[#0f766e] hover:text-white hover:shadow-2xl';

  return (
    <Link to={`/schedule/${day.toLowerCase()}`} className={buttonClass}>
      {day}
    </Link>
  );
}

export default ScheduleDays;
