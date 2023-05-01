import ScheduleItem from '@/components/Schedule/ScheduleItem';
import ScheduleDays from '@/components/Schedule/ScheduleDays';

function Monday() {
  return (
    <>
      {/* Day Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <ScheduleDays day="Monday" active={true} />
        <ScheduleDays day="Tuesday" active={false} />
        <ScheduleDays day="Wednesday" active={false} />
        <ScheduleDays day="Thursday" active={false} />
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
            trainer="Chun-Li"
          />
          <ScheduleItem
            className="Body Building"
            time="06:00am - 07:00am"
            trainer="Hulk"
          />
          <ScheduleItem
            className="Crossfit"
            time="10:00am - 11:00am"
            trainer="Black Widow"
          />
          <ScheduleItem
            className="Functional Training"
            time="02:00pm - 03:00pm"
            trainer="Groot"
          />
        </div>
      </div>
    </>
  );
}

export default Monday;
