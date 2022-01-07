import { useAuth } from "../../hooks/useAuth";

const Schedule = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>schedule page</h1> <br />
      {user && (
        <>
          <div>{user.email}</div>
          <div>{user.metadata.creationTime} tarihinde aramıza katıldın 🥳</div>
          <button
            style={{ width: "100px", height: "50px" }}
            type="button"
            onClick={logout}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Schedule;
