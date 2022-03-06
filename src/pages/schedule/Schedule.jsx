import ScheduleContent from "../../layout/ScheduleContent";
import ScheduleLayout from "../../layout/ScheduleLayout";

const Schedule = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "#e2e2e2" }}>
      <ScheduleLayout />
      <ScheduleContent />
    </div>
  );
};

export default Schedule;
