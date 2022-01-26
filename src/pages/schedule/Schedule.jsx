import ScheduleHeader from "../../components/Schedule/ScheduleHeader";
import { useAuth } from "../../hooks/useAuth";

const Schedule = () => {
  const { user } = useAuth();
  return (
    <div style={{ padding: "2rem" }}>
      <ScheduleHeader />
      <div>{user?.email}</div>
      <div>{user?.metadata.creationTime} tarihinde aramıza katıldın 🥳</div>
    </div>
  );
};

export default Schedule;
