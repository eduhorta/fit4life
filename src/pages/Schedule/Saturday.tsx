import ScheduleItem from '@/components/Schedule/ScheduleItem';
import ScheduleDays from '@/components/Schedule/ScheduleDays';

function Saturday() {
  return (
    <>
      {/* Day Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <ScheduleDays day="Monday" active={false} />
        <ScheduleDays day="Tuesday" active={false} />
        <ScheduleDays day="Wednesday" active={false} />
        <ScheduleDays day="Thursday" active={false} />
        <ScheduleDays day="Friday" active={false} />
        <ScheduleDays day="Saturday" active={true} />
      </div>

      {/* Classes Container */}
      <div className="mt-16">
        <div className="flex flex-col gap-3">
          {/* Rows */}
          <ScheduleItem
            className="Martial Arts"
            time="06:00am - 07:00am"
            trainer="Bruce Lee"
          />
          <ScheduleItem
            className="Body Building"
            time="09:00am - 10:00am"
            trainer="Rambo"
          />
          <ScheduleItem
            className="Functional Training"
            time="03:00pm - 04:00pm"
            trainer="Neo"
          />
          <ScheduleItem
            className="Yoga"
            time="03:00pm - 04:00pm"
            trainer="John Wick"
          />
        </div>
      </div>
    </>
  );
}

export default Saturday;
