import ScheduleItem from '@/components/Schedule/ScheduleItem';
import ScheduleDays from '@/components/Schedule/ScheduleDays';

function Tuesday() {
  return (
    <>
      {/* Day Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <ScheduleDays day="Monday" active={false} />
        <ScheduleDays day="Tuesday" active={true} />
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
            time="08:00am - 09:00am"
            trainer="Ken Masters"
          />
          <ScheduleItem
            className="Crossfit"
            time="10:00am - 11:00am"
            trainer="Harry Potter"
          />
          <ScheduleItem
            className="Functional Training"
            time="02:00pm - 03:00pm"
            trainer="John Wick"
          />
        </div>
      </div>
    </>
  );
}

export default Tuesday;
