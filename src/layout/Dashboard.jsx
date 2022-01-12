import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();

  // active nav element
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <nav id="dashboard">
      <Link
        to={"/weekly-schedule"}
        className={splitLocation[1] === "weekly-schedule" ? "active" : ""}
      >
        <span
          className={`home-icon ${
            splitLocation[1] === "weekly-schedule" ? "active" : ""
          }`}
        ></span>
        Ana Sayfa
      </Link>
      {/* <Link to={""}>Sınıflar</Link> */}
      <Link
        to={"/profile"}
        className={splitLocation[1] === "profile" ? "active" : ""}
      >
        <span
          className={`profile-icon ${
            splitLocation[1] === "profile" ? "active" : ""
          }`}
        ></span>
        Profil
      </Link>

      <p className="logout" onClick={logout}>
        Çıkış yap
        <span className="logout-icon"></span>
      </p>
    </nav>
  );
};

export default Dashboard;
