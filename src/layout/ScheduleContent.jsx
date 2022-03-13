import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getName } from "../utils/userUtils";
const ScheduleContent = () => {
  const { user } = useAuth();

  return (
    <section className="schedule-content">
      <header>
        <h1 className="schedule-content-title">
          merhaba {getName(user.displayName)}
        </h1>
      </header>
      <Outlet />
    </section>
  );
};

export default ScheduleContent;
