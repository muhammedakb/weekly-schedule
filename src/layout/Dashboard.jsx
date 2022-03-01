import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();

  // active nav element
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const navItems = [
    {
      url: "/weekly-schedule",
      iconClass: `home-icon ${
        splitLocation[1] === "weekly-schedule" ? "active" : ""
      }`,
      text: "Ana Sayfa",
    },
    {
      url: "/profile",
      iconClass: `profile-icon ${
        splitLocation[1] === "profile" ? "active" : ""
      }`,
      text: "Profil",
    },
  ];

  return (
    <nav id="dashboard">
      {navItems.map(({ url, iconClass, text }, index) => (
        <NavLink
          to={url}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          key={index}
        >
          <span className={iconClass}></span>
          {text}
        </NavLink>
      ))}
      <p className="logout" onClick={logout}>
        Çıkış yap
        <span className="logout-icon"></span>
      </p>
    </nav>
  );
};

export default Dashboard;
