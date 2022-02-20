// import ScheduleHeader from "../../components/Schedule/ScheduleHeader";
import ScheduleContent from "../../layout/ScheduleContent";
import ScheduleLayout from "../../layout/ScheduleLayout";
// import { useAuth } from "../../hooks/useAuth";

const Schedule = () => {
  // const { user } = useAuth();
  return (
    <div style={{ display: "flex" }}>
      {/* <ScheduleHeader /> */}
      <ScheduleLayout />
      <ScheduleContent />
      {/* <div>{user?.email}</div>
      <div>{user?.metadata.creationTime} tarihinde aramıza katıldın 🥳</div> */}
    </div>
  );
};

export default Schedule;
