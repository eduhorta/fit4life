import ScheduleItem from '@/components/Schedule/ScheduleItem';
import ScheduleDays from '@/components/Schedule/ScheduleDays';

function Friday() {
  return (
    <>
      {/* Day Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <ScheduleDays day="Monday" active={false} />
        <ScheduleDays day="Tuesday" active={false} />
        <ScheduleDays day="Wednesday" active={false} />
        <ScheduleDays day="Thursday" active={false} />
        <ScheduleDays day="Friday" active={true} />
        <ScheduleDays day="Saturday" active={false} />
      </div>

      {/* Classes Container */}
      <div className="mt-16">
        <div className="flex flex-col gap-3">
          {/* Rows */}
          <ScheduleItem
            className="Martial Arts"
            time="06:00am - 07:00am"
            trainer="Chuck Norris"
          />
          <ScheduleItem
            className="Body Building"
            time="09:00am - 10:00am"
            trainer="Arnold"
          />
          <ScheduleItem
            className="Crossfit"
            time="04:00pm - 05:00pm"
            trainer="Macgyver"
          />
        </div>
      </div>
    </>
  );
}

export default Friday;
