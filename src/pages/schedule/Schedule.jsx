import { useAuth } from "../../hooks/useAuth";

const Schedule = () => {
  const { user, logout } = useAuth();
  console.log(user);
  console.log(logout);
  return (
    <div>
      <h1>schedule page</h1>
    </div>
  );
};

export default Schedule;
