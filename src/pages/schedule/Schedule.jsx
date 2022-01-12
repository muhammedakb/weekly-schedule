import { useAuth } from "../../hooks/useAuth";

const Schedule = () => {
  const { user } = useAuth();
  return (
    <div style={{ padding: "2rem" }}>
      <h1>schedule page</h1> <br />
      {user && (
        <>
          <div>{user.email}</div>
          <div>{user.metadata.creationTime} tarihinde aramıza katıldın 🥳</div>
        </>
      )}
    </div>
  );
};

export default Schedule;
