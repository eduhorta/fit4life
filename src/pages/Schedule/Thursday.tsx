import ScheduleItem from '@/components/Schedule/ScheduleItem';
import ScheduleDays from '@/components/Schedule/ScheduleDays';

function Thursday() {
  return (
    <>
      {/* Day Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <ScheduleDays day="Monday" active={false} />
        <ScheduleDays day="Tuesday" active={false} />
        <ScheduleDays day="Wednesday" active={false} />
        <ScheduleDays day="Thursday" active={true} />
        <ScheduleDays day="Friday" active={false} />
        <ScheduleDays day="Saturday" active={false} />
      </div>

      {/* Classes Container */}
      <div className="mt-16">
        <div className="flex flex-col gap-3">
          {/* Rows */}
          <ScheduleItem
            className="Martial Arts"
            time="06:00am - 07:00am"
            trainer="Goku"
          />
          <ScheduleItem
            className="Body Building"
            time="10:00am - 11:00am"
            trainer="Clark Kent"
          />
          <ScheduleItem
            className="Crossfit"
            time="04:00pm - 05:00pm"
            trainer="Trinity"
          />
        </div>
      </div>
    </>
  );
}

export default Thursday;
