import { Outlet } from "react-router-dom";

const ScheduleContent = () => {
  return (
    <div>
      <h1>Nested Routes</h1>
      <Outlet />
    </div>
  );
};

export default ScheduleContent;
