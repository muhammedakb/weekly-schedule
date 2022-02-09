// import ScheduleHeader from "../../components/Schedule/ScheduleHeader";
import ScheduleLayout from "../../layout/ScheduleLayout";
// import { useAuth } from "../../hooks/useAuth";

const Schedule = () => {
  // const { user } = useAuth();
  return (
    <div>
      {/* <ScheduleHeader /> */}
      <ScheduleLayout />
      {/* <div>{user?.email}</div>
      <div>{user?.metadata.creationTime} tarihinde aramıza katıldın 🥳</div> */}
    </div>
  );
};

export default Schedule;
