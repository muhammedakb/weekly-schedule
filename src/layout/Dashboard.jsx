import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <nav id="dashboard">
      <Link to={"/weekly-schedule"}>Ana Sayfa</Link>
      {/* <Link to={""}>Sınıflar</Link> */}
      <Link to={"/profile"}>Profil</Link>

      <p className="logout" onClick={logout}>
        Çıkış yap
      </p>
    </nav>
  );
};

export default Dashboard;
