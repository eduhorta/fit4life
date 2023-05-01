import ScheduleItem from '@/components/Schedule/ScheduleItem';
import ScheduleDays from '@/components/Schedule/ScheduleDays';

function Wednesday() {
  return (
    <>
      {/* Day Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <ScheduleDays day="Monday" active={false} />
        <ScheduleDays day="Tuesday" active={false} />
        <ScheduleDays day="Wednesday" active={true} />
        <ScheduleDays day="Thursday" active={false} />
        <ScheduleDays day="Friday" active={false} />
        <ScheduleDays day="Saturday" active={false} />
      </div>

      {/* Classes Container */}
      <div className="mt-16">
        <div className="flex flex-col gap-3">
          {/* Rows */}
          <ScheduleItem
            className="Body Building"
            time="10:00am - 11:00am"
            trainer="Zangief"
          />
          <ScheduleItem
            className="Yoga"
            time="06:00am - 07:00am"
            trainer="Sara Connors"
          />
        </div>
      </div>
    </>
  );
}

export default Wednesday;
